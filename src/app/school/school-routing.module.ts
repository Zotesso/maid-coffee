import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClubComponent } from './club/club.component';


const schoolRoutes: Routes = [
  {path: '', component: SchoolComponent, children : [
    {path: 'tasks', component: TasksComponent},
    {path: 'club', component: ClubComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(schoolRoutes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
