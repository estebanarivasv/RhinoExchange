import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { WalletModel } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

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


  constructor(public mediaObserver: MediaObserver, private walletService: WalletService) { }

  ngOnInit() {
    // Tracks if screen size changes
    this.mediaSubcriptor = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === "xs" ? true : false;
    })
    this.wallets = this.walletService.getAllWallets();
    console.log("These are your wallets", this.wallets);
  }

  ngOnDestroy() {
    this.mediaSubcriptor.unsubscribe();
  }

  addWallet() {
    console.log("llama")
    this.walletService.createWallet()
  }

}
