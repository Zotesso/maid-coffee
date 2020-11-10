import { Component, OnInit } from '@angular/core';

import { faMap, faUser, faSchool, faFan, faBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = false;
  navbarOpen: boolean = false;
  faMap = faMap;
  faUser = faUser;
  faSchool = faSchool;
  faFan = faFan;
  faBox = faBox;

  constructor() { }

  ngOnInit(): void {
  }

  toogleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
