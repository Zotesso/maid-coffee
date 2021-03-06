import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
