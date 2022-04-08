import { Component, OnInit } from '@angular/core';
import { catchError, first, switchMap, tap } from 'rxjs';
import { AccountService } from './modules/account/services/account.service';
import { Transaction } from './modules/transaction-history/models/transaction.model';
import { TransactionHistoryService } from './modules/transaction-history/services/transaction-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'transaction-management';
  transactionHistory: Transaction[] = [];
  error: string = ''
  balance: number | undefined = undefined;

  constructor(private transactionHistoryService: TransactionHistoryService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadTransactionHistory();
  }

  onNewTransactionCreated() {
    this.loadTransactionHistory();
  }

  loadTransactionHistory() {
    this.error = ''
    this.balance = undefined;
    let history: Transaction[] = []
    this.transactionHistoryService.getTransactionHistory().pipe
      (first(), 
      tap(transactionHistory => transactionHistory.sort((a, b) => { return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf() })),
      switchMap( transactionHistory => {
        history = transactionHistory;
        const account_id = transactionHistory[0].account_id;
        return this.accountService.getAccountBalance(account_id);
      }),
      catchError(error => {
        this.error = error?.error?.errors[0];
        throw new Error(error)
      }))
    .subscribe(account => {
      this.transactionHistory = history;
      this.transactionHistory[0].balance = account.balance
      })
    }
}
