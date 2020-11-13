import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksResolver } from '../guards/tasks-resolver.guard';


const schoolRoutes: Routes = [
  {path: '', component: SchoolComponent, children : [
    {path: 'tasks', component: TasksComponent,
      resolve: {   schoolTasks: TasksResolver}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(schoolRoutes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
