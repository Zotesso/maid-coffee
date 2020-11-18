import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CharacterComponent } from './character/character.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RankingComponent } from './ranking/ranking.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ProfileComponent,
    CharacterComponent,
    GiftsComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    ProfileRoutingModule
  ],
  providers: [

  ],
})
export class ProfileModule { }
