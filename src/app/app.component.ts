import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs';
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

  constructor(private transactionHistoryService: TransactionHistoryService) {}
  
  ngOnInit(): void {
    this.error = ''
    this.transactionHistoryService.getTransactionHistory().pipe(first(), tap(transactionHistory => transactionHistory.sort((a, b) => { return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf() }))).subscribe({ next: transactionHistory => this.transactionHistory = transactionHistory, error: error => this.error = error?.error?.errors[0] })
  }

  onNewTransactionCreated() {
    this.error = ''
    this.transactionHistoryService.getTransactionHistory().pipe(first(), tap(transactionHistory => transactionHistory.sort((a, b) => { return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf() }))).subscribe({ next: transactionHistory => this.transactionHistory = transactionHistory, error: error => this.error = error?.error?.errors[0] })
  }
}
