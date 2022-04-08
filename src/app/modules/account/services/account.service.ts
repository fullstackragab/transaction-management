import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountBalance(accountId: string) {
    return this.http.get<Account>('https://infra.devskills.app/api/accounting/accounts/' + accountId)
  }
}
