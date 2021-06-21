import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss']
})
export class EditWalletComponent implements OnInit {

  submitted = false;
  editWalletModel: WalletModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: WalletModel,
    private service: WalletService
  ) {
    this.editWalletModel = data;
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.submitted = true;
    this.service.editWallet(this.editWalletModel)
  }
}
