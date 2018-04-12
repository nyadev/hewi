import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   step = 0;
   signupForm: FormGroup;

   constructor (private authService: AuthService) {}

   ngOnInit() {
     this.signupForm = new FormGroup({
       pNameP: new FormControl(null, [
         Validators.required
       ]),
       mNameP: new FormControl(null, []),
       nameP: new FormControl(null, []),
       curp: new FormControl(null, []),
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
       password: new FormControl(null, [])
     });
   }

   onSubmit() {
     if (this.signupForm.valid) {
       const { pNameP, mNameP, nameP, curp, phone,
         cellphone, email, password, address, extnumber, intnumber, colonia, delegacion,
         postalcode, state}  = this.signupForm.value;
       const userType = 'patient';
       const user = new User(email, password, nameP , pNameP, mNameP, curp, userType);
       this.authService.signup(user)
         .subscribe(
           null,
           err => console.log(err)
         );
         this.signupForm.reset();
     }
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
