import { SideNavItem } from '@angular-anim/shared/presentational';
import { UserFacade } from '@angular-anim/shared/store';
import { Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { startWith } from 'rxjs';

@Component({
  selector: 'angular-anim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sideNavItems: SideNavItem[] =  [];
  userType = 'Not Logged In';
  accounts: Account[] = [];
  accountsFilter = '';

  constructor(private userFacade: UserFacade, private accountService: AccountService) {
   this.sideNavItems = [
    { title: 'Account Overview', subtitle: '', link: '/' },
    { title: 'Transfers', subtitle: '', link: '/transfers' },
    { title: 'About Challenge', subtitle: '', link: '/about' },
  ]; 
}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }

  user$ = this.userFacade.getUser();
  userName$ = this.userFacade.getUserName().pipe(
    startWith(this.userType),
  )
}
