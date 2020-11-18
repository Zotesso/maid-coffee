import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { SchoolRoutingModule } from './school-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ApiService } from '../shared/service/api.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClubComponent } from './club/club.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SchoolComponent,
    TasksComponent,
    ClubComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    SchoolRoutingModule
  ],
  providers: [],
})
export class SchoolModule { }
