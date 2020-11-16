import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ApiService } from '../shared/service/api.service';
import { CharacterComponent } from './character/character.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RankingComponent } from './ranking/ranking.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CharacterComponent,
    GiftsComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [
    ApiService
  ],
})
export class ProfileModule { }
