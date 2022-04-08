import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    MyLoaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MyLoaderComponent
  ]
})
export class SharedModule { }
