import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { catchError, EMPTY, first } from 'rxjs';
import { NewTransactionService } from '../../services/new-transaction.service';

@Component({
  selector: 'app-new-transation',
  templateUrl: './new-transation.component.html',
  styleUrls: ['./new-transation.component.scss']
})
export class NewTransationComponent implements OnInit {
  newTransactionForm = new UntypedFormGroup({
    accountId: new UntypedFormControl('', Validators.required),
    amount: new UntypedFormControl('', Validators.required)
  })
  @Output() newTransactionCreated = new EventEmitter()
  @ViewChild(FormGroupDirective) newTransactionFormGroupDirective!: FormGroupDirective;

  error = ''

  constructor(private newTransactionService: NewTransactionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = ''
    this.newTransactionService.createNewTransaction(this.newTransactionForm.value.accountId, this.newTransactionForm.value.amount).pipe(first()).subscribe({
       next: newTransaction => { 
         this.resetNewTransactionForm();
         this.newTransactionCreated.emit()
       }, 
       error: error => { 
         this.error = error?.error?.errors[0] 
       }
      })
  }

  resetNewTransactionForm() {
    this.newTransactionFormGroupDirective.resetForm();
  }

}
