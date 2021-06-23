import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionModel } from '../models/transaction.model';
import { WalletModel } from '../models/wallet.model';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private walletService: WalletService) { }

  addTransactionToWallet(walletName: string, transaction: TransactionModel) {
    let wallet = this.walletService.getWalletByName(walletName);
    if (wallet !== null) {
      wallet.transactions.push(transaction);
      this.walletService.editWallet(wallet);
    }
  }
}
