import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { User } from '../../../../auth/user.model';
@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})

export class RegisterTherapistComponent  implements OnInit {
  registertherapistForm: FormGroup;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.registertherapistForm = new FormGroup({
      lNameF: new FormControl(null, [
        Validators.required
      ]),
      lNameM: new FormControl(null, []),
      name: new FormControl(null, []),
      curp: new FormControl(null, []),
      phone: new FormControl(null, []),
      cellphone: new FormControl(null, []),
      email: new FormControl(null, []),
      password: new FormControl(null, []),
      address: new FormControl(null, []),
      extnumber: new FormControl(null, []),
      intnumber: new FormControl(null, []),
      colonia: new FormControl(null, []),
      delegacion: new FormControl(null, []),
      postalcode: new FormControl(null, []),
      state: new FormControl(null, []),
      career: new FormControl(null, []),
      posgrade: new FormControl(null, []),
    });
  }

  onSubmit() {
    if (this.registertherapistForm.valid) {
      const { lNameF, lNameM, name, curp, phone,
        cellphone, email, password, address, extnumber, intnumber, colonia, delegacion,
        postalcode, state, career, posgrade}  = this.registertherapistForm.value;
      const userType = 'therapist';
      const user = new User(email, password, name , lNameF, lNameM, curp, userType);
      this.authService.signup(user)
        .subscribe(
          this.authService.login,
          err => console.log(err)
        );
    }
  }
}
