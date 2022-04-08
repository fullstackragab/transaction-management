import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransationComponent } from './components/new-transation/new-transation.component';

const routes: Routes = [
  { path: '', component: NewTransationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTransactionRoutingModule { }
