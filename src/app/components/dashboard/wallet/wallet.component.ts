import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() wallets: Array<WalletModel> | null = [];





  displayedColumns: string[] = ['timestamp', 'type', 'exchange', 'amount'];
  dataSource = ELEMENT_DATA;




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
