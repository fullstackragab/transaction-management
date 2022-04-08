import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  @Input() transactionHistory: Transaction[] = []
  @Input() error: string = ''

  constructor() { }

  ngOnInit(): void {

  }

}
