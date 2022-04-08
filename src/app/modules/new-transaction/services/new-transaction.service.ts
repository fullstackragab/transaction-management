import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewTransactionService {
  createNewTransaction(accountId: string, amount: number) {
    return this.http.post('https://infra.devskills.app/api/accounting/transactions', {
      "account_id": accountId,
      "amount": amount
    }, {
      headers: { "Content-Type": "application/json" }
    })
  }

  constructor(private http: HttpClient) { }
}
