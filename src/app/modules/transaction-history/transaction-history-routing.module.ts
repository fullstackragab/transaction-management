import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

const routes: Routes = [
  { path: '', component: TransactionHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionHistoryRoutingModule { }
