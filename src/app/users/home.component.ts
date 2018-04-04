import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.router.navigateByUrl('/' + this.getUserType());
    } else {
      this.router.navigateByUrl('/signin');
    }
  }

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
