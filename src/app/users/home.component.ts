import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User = this.authService.currentUser;
  constructor(private authService: AuthService, private router: Router, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Hewi');
  }
  getUserType() {
    return this.authService.currentUser.userType;
  }
}
