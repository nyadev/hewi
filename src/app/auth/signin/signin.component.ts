import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private authServie: AuthService) { }

  ngOnInit() {
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
        err => console.log(err)
      );
   }
 }
}
