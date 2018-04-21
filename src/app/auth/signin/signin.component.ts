import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private authServie: AuthService,
    private snackBar: MatSnackBar,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Hewi - Iniciar Sesión');
   this.signinForm = new FormGroup({
     email: new FormControl(null, [
       Validators.required,
       Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
     ]),
     password: new FormControl(null, Validators.required)
   });
  }

 onSubmit() {
   if (this.signinForm.valid) {
     const { email, password } = this.signinForm.value;
     const user = new User(email, password);
     this.authServie.signin(user)
      .subscribe(
        this.authServie.login,
        this.authServie.handleError
      );
   }else {
     this.snackBar.open('Por favor completa los campos', 'x', {duration: 2000});
   }
 }
}
