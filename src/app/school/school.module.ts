import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolService } from './school.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    SchoolComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ],
  providers: [SchoolService],
})
export class SchoolModule { }
