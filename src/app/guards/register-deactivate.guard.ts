import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterDeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (component.email.markAsTouched || component.charName.markAsTouched
        || component.username.markAsTouched || component.password.markAsTouched){
          return confirm('Tem certeza que deseja sair? As modificações não serão salvas!');
      }
  }
}
