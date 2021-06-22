import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() wallets: Array<WalletModel> | null = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: WalletService
  ) { }

  ngOnInit(): void {
    
    if (this.wallets === null) {
      alert("Wallets empty")
    }
  }

  openEditDialog(wallet: WalletModel): void {
    this.dialog.open(EditWalletComponent, {
      data: wallet
    });
  }

  onDelete(wallet: WalletModel) {
    this.service.deleteWallet(wallet)
    this.snackBar.open("Wallet deleted", "close");
  }

}
