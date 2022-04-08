import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    MatCardModule
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
