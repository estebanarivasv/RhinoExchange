import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subscription } from 'rxjs';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';
import { AddWalletComponent } from './wallet/add-wallet/add-wallet.component';

const source = interval(1000);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Screen size
  mediaSubcriptor: Subscription = new Subscription;
  deviceXs: boolean = false;

  title = "Dashboard";

  wallets: Array<WalletModel> | null = [];
  

  constructor(
    public mediaObserver: MediaObserver,
    private walletService: WalletService,
    private dialog: MatDialog) { }

  ngOnInit() {

    source.subscribe(val => {
      let wallets = this.walletService.getAllWallets();
      if ((wallets !== null) && (this.wallets?.length !== wallets.length)) {
        this.wallets = wallets
      }
    });
    
    // Tracks if screen size changes
    this.mediaSubcriptor = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === "xs" ? true : false;
    })
    this.wallets = this.walletService.getAllWallets();
  }

  ngOnDestroy() {
    this.mediaSubcriptor.unsubscribe();
  }

  openAddDialog(): void {
    this.dialog.open(AddWalletComponent);
  }


  ngOnChanges() {
    this.wallets = this.walletService.getAllWallets();
  }
}
