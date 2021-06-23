import { Component, OnInit, SimpleChange } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoinModel } from 'src/app/models/coin.model';
import { TransactionModel } from 'src/app/models/transaction.model';
import { WalletModel } from 'src/app/models/wallet.model';
import { CoinService } from 'src/app/services/coin.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-buy-crypto',
  templateUrl: './buy-crypto.component.html',
  styleUrls: ['./buy-crypto.component.scss']
})
export class BuyCryptoComponent implements OnInit {

  wallets: WalletModel[] | null = [];     // All system's data
  availableCoinIds: string[] = [];          // Coins available to trade

  selectedWallet!: WalletModel;           // Wallet whose funds will be used
  selectedWalletName!: string;            // Wallet name
  balance: number = 0;                    // Wallet balance

  // Form Variables 
  fromCoinSymbol: string = "";            // Both will be used to fetch data and store in coins variables
  toCoinSymbol: string = "";
  amountSpent: string = "";
  amountReceived: number = 0;

  coinsByTarget: CoinModel[] = [];
  conversionValue: number = 0;


  constructor(
    private walletService: WalletService,
    private coinService: CoinService,
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCoinsList();
    this.getWallets();
  }

  getCoinsList(): void {
    this.coinService.getAvailableCoinIds().subscribe(data => this.availableCoinIds = data);
  }

  getWallets(): void {
    this.wallets = this.walletService.getAllWallets();
  }

  setWallet() {
    let wallet = this.walletService.getWalletByName(this.selectedWalletName);
    if (wallet !== null) {
      this.selectedWallet = wallet;
      this.balance = this.selectedWallet.balance;
      this.ngOnInit()
    }
  }

  setFromCoin() {
    this.coinService.getMarketByTargetCoin(this.fromCoinSymbol).subscribe(data => {
      this.coinsByTarget = data;
    })
    if (this.toCoinSymbol !== "") {
      this.setMultiplyValue()
    }
  }

  setMultiplyValue() {
    this.coinsByTarget.forEach(coin => {
      if (coin.symbol === this.toCoinSymbol) {
        this.conversionValue = coin.current_price;
      }
    })
  }

  multiplyForConversion() {
    if (this.conversionValue !== 0) {
      this.amountReceived = parseFloat(this.amountSpent) * this.conversionValue
    }
  }
  

  onSubmit() {

    // set fromCoin
    this.coinsByTarget.forEach(coin => {
      if (coin.symbol === this.fromCoinSymbol) {
        var fromCoin = coin;

        // set toCoin
        this.coinsByTarget.forEach(coin => {
          if (coin.symbol === this.toCoinSymbol) {
            var toCoin = coin;

            let transaction = new TransactionModel(
              fromCoin,
              toCoin,
              parseFloat(this.amountSpent),
              this.amountReceived,
              Date.now().toString(),
              "buy"
            )
            this.transactionService.addTransactionToWallet(this.selectedWallet.name, transaction)
            this.snackBar.open("Transaction created", "close");
          }
        });
      }
    });






    
  }
}
