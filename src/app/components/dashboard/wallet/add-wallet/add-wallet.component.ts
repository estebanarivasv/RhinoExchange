import { Component, OnInit } from '@angular/core';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {


  addWalletModel = { name: "", address: "", balance: "" }

  submitted = false;

  constructor(private service: WalletService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    let wallet = new WalletModel(this.addWalletModel.name, this.addWalletModel.address, parseFloat(this.addWalletModel.balance), [])
    this.service.createWallet(wallet)
    console.log(this.addWalletModel);
  }

}
