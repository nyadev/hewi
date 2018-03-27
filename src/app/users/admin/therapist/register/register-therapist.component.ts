import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})

export class RegisterTherapistComponent  implements OnInit{
  registertherapistForm: FormGroup;

  ngOnInit() {
    this.registertherapistForm = new FormGroup({
      lNameF: new FormControl(null, [
        Validators.required
      ]),
      lNameM: new FormControl(null, []),
      nome: new FormControl(null, []),
      phone: new FormControl(null, []),
      cellphone: new FormControl(null, []),
      username: new FormControl(null, []),
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
}
