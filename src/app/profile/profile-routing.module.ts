import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CharacterComponent } from './character/character.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RankingComponent } from './ranking/ranking.component';



const profileRoutes: Routes = [
  {path: '', component: ProfileComponent, children : [
    {path: 'character', component: CharacterComponent},
    {path: 'gifts', component: GiftsComponent},
    {path: 'ranking', component: RankingComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
