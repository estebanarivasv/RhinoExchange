import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WalletModel } from 'src/app/models/wallet.model';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() wallets: Array<WalletModel> | null = [];

  constructor(private dialog:MatDialog) { }

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

  openAddDialog(): void {
    this.dialog.open(EditWalletComponent);
  }

}
