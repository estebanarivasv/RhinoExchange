import { Injectable } from '@angular/core';
import { TransactionModel } from '../models/transaction.model';
import { WalletModel } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  wallets: Array<WalletModel> = []

  getWalletData() { }

  // TODO: Validate if wallet name exists.
  createWallet() {
    let wallet1 = new WalletModel(1, "Fixed savings", [], "0x54a5sd45as4d", 560042.2);
    let wallet2 = new WalletModel(2, "Normal savings", [], "0x54a5as66as4d", 486.2);
    let wallets = [wallet1, wallet2]

    window.localStorage.setItem('wallets', JSON.stringify(wallets))
  }

  deleteWallet() { }

  addTransaction(transaction: TransactionModel) { }

  modifyTransaction(index: number) { }

  deleteTransaction(index: number) { }

  getAllWallets() {
    let walletsFromLocal = window.localStorage.getItem("wallets")

    if (walletsFromLocal !== null) {
      this.wallets = JSON.parse(walletsFromLocal)
      console.log("wallets in localStorage", this.wallets)
    }

  }

}
