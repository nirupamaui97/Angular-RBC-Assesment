import { AccountSummaryComponent } from '@angular-anim/feature/account-summary';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountRoutingDetailsComponent } from './account-routing-details/account-routing-details.component';

// TODO: 2. We've setup these routes and have them on the page but they aren't working
const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'transfers', component: AccountSummaryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountDetailsComponent },
  { path: 'accountDetails/:id', component: AccountRoutingDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }