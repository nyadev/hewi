import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  usersUrl: string;
  currentUser?: User;

  constructor(private http: Http, private router: Router) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
    if (this.isLoggedIn()) {
      const { userId, email, username, firstName, pName, mName, curp, userType } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, userId, username, firstName, pName, mName, curp, userType);
    }
  }

  signup (user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post(urljoin(this.usersUrl, 'signup'), body, { headers })
    .map((response: Response) => {
      const json = response.json();
      this.login(json);
      return json;
    })
    .catch((error: Response) => {
    console.log(error);
    return Observable.throw(error.json());
    });
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this.http.post(urljoin(this.usersUrl, 'signin'), body, { headers })
      .map((response: Response) => {
        const json = response.json();
        this.login(json);
        return json;
      })
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw(error.json());
      });
  }

  login = ({ token, userId, username, firstName, pName, mName, email, curp, userType }) => {
    this.currentUser = new User(email, null, userId, username, firstName, pName, mName, curp, userType);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, email, firstName, pName, mName, curp, userType }));
    this.router.navigateByUrl('/admin');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
