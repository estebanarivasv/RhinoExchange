import { Injectable } from '@angular/core';
import { TransactionModel } from '../models/transaction.model';
import { WalletModel } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  // TODO: Validate if wallet name exists.
  createWallet(newWallet: WalletModel) {

    let wallets = this.getAllWallets();
    if ((wallets !== null) && (wallets !== [])) {
      newWallet.id = wallets.length;

      wallets.push(newWallet);
      this.saveWalletsList(wallets);
      
    } else {
      let wallets = []
      newWallet.id = 1
      wallets.push(newWallet);
      this.saveWalletsList(wallets);
    }
  }

  deleteWallet(wallet: WalletModel) {
    let wallets = this.getAllWallets();
    if (wallets !== null) {
      if (wallet.id !== undefined) {
        let index = this.getWalletIndex(wallet.id)

        wallets.splice(index, 1)

        this.saveWalletsList(wallets)
      }

    }
  }

  getWalletIndex(walletId: number): number {
    let wallets = this.getAllWallets()
    if (wallets !== null) {
      var index: number = wallets.findIndex(function (wallet) {
        return wallet.id === walletId;
      });
      return index
    }
    return -1
  }

  editWallet(editedWallet: WalletModel) {
    let wallets = this.getAllWallets()

    if (wallets !== null) {
      if (editedWallet.id !== undefined) {
        let index = this.getWalletIndex(editedWallet.id)
        wallets.splice(index, 1, editedWallet)
        this.saveWalletsList(wallets)
      }
    }
  }

  saveWalletsList(walletList: Array<WalletModel>) {
    // TODO DELETE THIS
    //let wallet1 = new WalletModel("Fixed savings", "0x54a5sd45as4d", 560042.2, [], 1);
    //let wallet2 = new WalletModel("Normal savings", "0x54a5as66as4d", 486.2, [], 2);
    //let wallets = [wallet1, wallet2];

    window.localStorage.setItem("wallets", JSON.stringify(walletList));

  }

  addTransaction(transaction: TransactionModel) { }

  modifyTransaction(index: number) { }

  deleteTransaction(index: number) { }

  getAllWallets(): WalletModel[] | null {

    let walletsFromLocal = window.localStorage.getItem("wallets")

    if (walletsFromLocal !== null) {
      try {
        let wallets = JSON.parse(walletsFromLocal);
        return wallets;
      } catch (Exception) {
        return [];
      }

    } else {
      alert("There are not available wallets")
      return null
    }
  }
}
