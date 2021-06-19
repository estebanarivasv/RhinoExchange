import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mediaSubcriptor: Subscription = new Subscription;
  deviceXs: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private mediaObserver: MediaObserver
  ) {
    this.matIconRegistry.addSvgIcon(
      `rhino_full`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/rhino-full.svg")
    );
  }

  ngOnInit() {
    // If the screen size changes and device has an extra small screen, deviceXs sets to true
    this.mediaSubcriptor = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSubcriptor.unsubscribe();
  }

}
