import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;

  constructor() { }

  verifyAuthorization(): boolean{
    if (localStorage.getItem('accessToken') && localStorage.getItem('charName')){
      this.authenticatedUser = true;
    }
    else{
      this.authenticatedUser = false;
    }

    return this.authenticatedUser;
  }
}
