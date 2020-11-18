import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';



const workRoutes: Routes = [
  {
    path: '', component: WorkComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
