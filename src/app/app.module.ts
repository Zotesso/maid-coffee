import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/service/auth.service';
import { RegisterDeactivateGuard } from './guards/register-deactivate.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlertModalComponent } from './shared/components/alert-modal/alert-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApiService } from './shared/service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    RegisterDeactivateGuard,
    ApiService
  ],
  exports: [AlertModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
