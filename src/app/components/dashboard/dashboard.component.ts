import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
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


  constructor(public mediaObserver: MediaObserver, private walletService: WalletService) { }

  ngOnInit() {
    // Tracks if screen size changes
    this.mediaSubcriptor = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSubcriptor.unsubscribe();
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addWallet() {
    console.log("llama")
    this.walletService.createWallet()
  }

  showWallets() {
    this.walletService.getAllWallets()
  }
}
