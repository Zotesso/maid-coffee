import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { TasksComponent } from './tasks/tasks.component';


const schoolRoutes: Routes = [
  {path: 'school', component: SchoolComponent, children : [
    {path: 'tasks', component: TasksComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(schoolRoutes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
