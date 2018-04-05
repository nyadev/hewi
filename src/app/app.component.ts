import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getName() {
    return this.authService.currentUser.firstName;
  }

  getUserType() {
    return this.authService.currentUser.userType + '';
  }

  logout() {
    this.authService.logout();
  }
}
