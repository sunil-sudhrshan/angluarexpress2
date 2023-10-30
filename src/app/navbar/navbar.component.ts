import { Component, OnInit } from '@angular/core';
import { AuthService } from './AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
