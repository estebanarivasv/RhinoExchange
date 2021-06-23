import { Injectable } from '@angular/core';
import { TransactionModel } from '../models/transaction.model';
import { WalletModel } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  getTotalBalance() {
    let wallets = this.getAllWallets();
    if ((wallets !== null) && (wallets !== [])) {
      let total = 0
      wallets.forEach(wallet => {
        total = total + wallet.balance
      })
      return total

    } else {
      return 0;
    }
  }

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

  getWalletByName(walletName: string): WalletModel | null {
    let wallets = this.getAllWallets()
    if (wallets !== null) {
      var index: number = wallets.findIndex(function (wallet) {
        return wallet.name === walletName;
      });
      return wallets[index]
    }
    return null
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
    window.localStorage.setItem("wallets", JSON.stringify(walletList));
  }

  getAllWallets(): WalletModel[] {

    let walletsFromLocal = window.localStorage.getItem("wallets")

    if (walletsFromLocal !== null) {
      try {
        let wallets = JSON.parse(walletsFromLocal);
        return wallets;
      }
      catch (Exception) {
        return [];
      }

    } else {
      return [];
    }
  }
}
