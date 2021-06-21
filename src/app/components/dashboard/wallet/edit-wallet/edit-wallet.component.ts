import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WalletModel } from 'src/app/models/wallet.model';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss']
})
export class EditWalletComponent implements OnInit {

  wallet: WalletModel

  constructor(@Inject(MAT_DIALOG_DATA) data: WalletModel) {
    this.wallet = data;
  }

  ngOnInit(): void {
  }
  
}
