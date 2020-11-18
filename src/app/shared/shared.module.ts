import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { AbsoluteValuePipe } from './pipes/absolute-value.pipe';


@NgModule({
  declarations: [
    AbsoluteValuePipe,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlertModalComponent,
    AbsoluteValuePipe
  ]
})
export class SharedModule { }
