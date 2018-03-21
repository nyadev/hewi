import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   step = 0;
   signupForm: FormGroup;

   ngOnInit() {
     this.signupForm = new FormGroup({
       pNameP: new FormControl(null, [
         Validators.required
       ]),
       mNameP: new FormControl(null, []),
       nameP: new FormControl(null, []),
       username: new FormControl(null, []),
       password: new FormControl(null, []),
       genderP: new FormControl(null, []),
       datebornP: new FormControl(null, []),
       ageP: new FormControl(null, []),
       lateralidadP: new FormControl(null, []),
       escolaridadP: new FormControl(null, []),
       diagnostico: new FormControl(null, []),
       estudios: new FormControl(null, []),
       pNameT: new FormControl(null, []),
       mNameT: new FormControl(null, []),
       nameT: new FormControl(null, []),
       address: new FormControl(null, []),
       extnumber: new FormControl(null, []),
       intnumber: new FormControl(null, []),
       colonia: new FormControl(null, []),
       delegacion: new FormControl(null, []),
       postalcode: new FormControl(null, []),
       state: new FormControl(null, []),
       escolaridadT: new FormControl(null, []),
       ageT: new FormControl(null, []),
       phone: new FormControl(null, []),
       cellphone: new FormControl(null, []),
       email: new FormControl(null, []),
     });
   }

   setStep(index: number) {
     this.step = index;
   }

   nextStep() {
     this.step++;
   }

   prevStep() {
     this.step--;
   }
}
