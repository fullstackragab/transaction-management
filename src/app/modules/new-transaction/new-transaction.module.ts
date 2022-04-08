import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTransactionRoutingModule } from './new-transaction-routing.module';
import { NewTransationComponent } from './components/new-transation/new-transation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NewTransationComponent
  ],
  imports: [
    CommonModule,
    NewTransactionRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  exports: [
    NewTransationComponent
  ]
})
export class NewTransactionModule { }
