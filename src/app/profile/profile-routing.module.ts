import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';



const profileRoutes: Routes = [
  {path: '', component: ProfileComponent, children : [
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
