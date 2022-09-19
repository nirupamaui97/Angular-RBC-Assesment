import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'angular-anim-account-routing-details',
  templateUrl: './account-routing-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountRoutingDetailsComponent {
  accounts: Account[] = [];
  accountsFilter = '';
  routeId = 0;
   accounts$: Observable<Account[]> = of([]);
  constructor(private accountService: AccountService,  private route: ActivatedRoute,) {}
 

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
   
      this.routeId = Number(this.route.snapshot.paramMap.get('id'));
      
  }

  filterAccounts(accounts: Account[]) {
    return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  }
 
}
