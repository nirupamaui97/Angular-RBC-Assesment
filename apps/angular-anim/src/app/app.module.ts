import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FeaturePresentationalModule } from '@angular-anim/shared/presentational';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountSummaryComponent, FeatureAccountSummaryModule } from '@angular-anim/feature/account-summary';
import { SharedStoreModule } from '@angular-anim/shared/store';
import { StoreModule } from '@ngrx/store';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountRoutingDetailsComponent } from './account-routing-details/account-routing-details.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, AccountDetailsComponent, AccountRoutingDetailsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturePresentationalModule,
    FeatureAccountSummaryModule,
    SharedStoreModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
