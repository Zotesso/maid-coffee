import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedUser: boolean = false;

  constructor(private router: Router) { }

  verifyAuthorization(): boolean{
    if (localStorage.getItem('accessToken') && localStorage.getItem('charName')){
      this.authenticatedUser = true;
    }
    else{
      this.authenticatedUser = false;
    }

    return this.authenticatedUser;
  }

  logout(): void{
    localStorage.clear();
    this.authenticatedUser = false;

    this.router.navigate(['/']);
  }
}
