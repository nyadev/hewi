import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { User } from '../../../../auth/user.model';
import { Therapist } from '../../../../auth/therapist.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})

export class RegisterTherapistComponent  implements OnInit {
  registertherapistForm: FormGroup;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registertherapistForm = new FormGroup({
      pName: new FormControl(null, [Validators.required]),
      mName: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      cedula: new FormControl(null, [Validators.required]),
      lunes: new FormControl(null, [Validators.required]),
      martes: new FormControl(null, [Validators.required]),
      miercoles: new FormControl(null, [Validators.required]),
      jueves: new FormControl(null, [Validators.required]),
      viernes: new FormControl(null, [Validators.required]),
      sabado: new FormControl(null, [Validators.required]),
      domingo: new FormControl(null, [Validators.required]),
      email: new FormControl(null,
        [Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.registertherapistForm.valid) {
      const { email, password, firstName, pName, mName,
        cedula, lunes, martes, miercoles, jueves, viernes, sabado, domingo  }  = this.registertherapistForm.value;
      const userType = 'therapist';
      const therapist = new Therapist(cedula, lunes, martes, miercoles, jueves, viernes, sabado, domingo);
      const user = new User(email, password, firstName , pName, mName, userType, therapist);
      this.authService.signup(user)
        .subscribe(
          us => console.log(us),
          err => console.log(err)
        );
      this.snackBar.open(`Se registró a ${firstName} de manera exitosa`, 'x', { duration: 2000});
      this.registertherapistForm.reset();
    } else {
      this.snackBar.open('Debes llenar todos los campos', 'x', { duration: 2000});
    }
  }
}
