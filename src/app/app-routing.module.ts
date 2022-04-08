import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/new-transaction', pathMatch: 'full' },
  { path: 'new-transaction', loadChildren: () => import('./modules/new-transaction/new-transaction.module').then( m => m.NewTransactionModule ) },
  { path: 'transaction-history', loadChildren: () => import('./modules/transaction-history/transaction-history.module').then( m => m.TransactionHistoryModule ) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
