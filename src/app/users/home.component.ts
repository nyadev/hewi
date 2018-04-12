import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  currentUser: User = this.authService.currentUser;
  constructor(private authService: AuthService, private router: Router) {}

  getUserType() {
    return this.authService.currentUser.userType;
  }
}
