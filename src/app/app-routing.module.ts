import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterDeactivateGuard } from './guards/register-deactivate.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'school',
    loadChildren: () => import('./school/school.module').then(m => m.SchoolModule),
    canActivate: [AuthGuard]
  },
  {path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {path: 'register', component: RegisterComponent,
    canDeactivate: [RegisterDeactivateGuard]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
