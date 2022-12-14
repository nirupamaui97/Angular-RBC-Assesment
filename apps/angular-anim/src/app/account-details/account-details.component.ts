import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent {
  accounts: Account[] = [];
  accountsFilter = '';
  accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService) {}
 

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
}
