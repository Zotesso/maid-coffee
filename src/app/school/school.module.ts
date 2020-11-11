import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ApiService } from '../shared/service/api.service';

@NgModule({
  declarations: [
    SchoolComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ],
  providers: [ApiService],
})
export class SchoolModule { }
