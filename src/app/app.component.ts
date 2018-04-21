import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Hewi - Iniciar Sesión');
    if (this.isLoggedIn()) {

    }else {
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
