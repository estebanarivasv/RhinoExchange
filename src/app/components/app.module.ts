import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { SharedModule } from './shared/shared.module';
import { SectionComponent } from './section/section.component';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './dashboard/wallet/wallet.component';
import { EditWalletComponent } from './dashboard/wallet/edit-wallet/edit-wallet.component';
import { AddWalletComponent } from './dashboard/wallet/add-wallet/add-wallet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ExchangeComponent,
    SectionComponent,
    WalletComponent,
    EditWalletComponent,
    AddWalletComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
 