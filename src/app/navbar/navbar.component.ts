import { Component, OnInit, OnDestroy } from '@angular/core';

import { faCoffee, faUser, faSchool, faFan, faBox, faSignOutAlt, faTrophy, faBolt, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/service/auth.service';
import { ApiService } from '../shared/service/api.service';
import { Observable, Subscription } from 'rxjs';
import { Char } from '../shared/model/char.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isCollapsed: boolean = false;
  navbarOpen: boolean = false;
  faCoffee = faCoffee;
  faUser = faUser;
  faSchool = faSchool;
  faFan = faFan;
  faBox = faBox;
  faSignOutAlt = faSignOutAlt;
  faTrophy = faTrophy;
  faBolt = faBolt;
  faLaptopHouse = faLaptopHouse;

  charEnergy: number = 0;
  sub: Subscription;

  constructor(
    public authService: AuthService,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.sub = this.apiService.getAsObservable().subscribe(res => {
      this.charEnergy = res.energy;
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toogleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  handleLogout(): void {
    this.authService.logout();
  }
}
