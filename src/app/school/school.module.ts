import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ApiService } from '../shared/service/api.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    SchoolComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SchoolRoutingModule
  ],
  providers: [],
})
export class SchoolModule { }
