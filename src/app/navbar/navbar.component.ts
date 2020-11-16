import { Component, OnInit, OnChanges} from '@angular/core';

import { faCoffee, faUser, faSchool, faFan, faBox, faSignOutAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isCollapsed: boolean = false;
  navbarOpen: boolean = false;
  faCoffee = faCoffee;
  faUser = faUser;
  faSchool = faSchool;
  faFan = faFan;
  faBox = faBox;
  faSignOutAlt = faSignOutAlt;
  faTrophy = faTrophy;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  toogleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  handleLogout(): void {
    this.authService.logout();
  }
}
