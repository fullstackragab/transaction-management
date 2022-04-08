import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {
  constructor(private http: HttpClient) { }

  getTransactionHistory() {
    return this.http.get<Transaction[]>('https://infra.devskills.app/api/accounting/transactions')
  }
}
