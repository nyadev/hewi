import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { Patient } from '../patient.model';
import { AuthService } from '../auth.service';
import { ConsultService } from '../../users/admin/therapist/consult/consult.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ConsultService]
})
export class SignupComponent implements OnInit {
   step = 0;
   signupForm: FormGroup;
   therapists: User [];

   constructor (
     private authService: AuthService,
     private consultService: ConsultService
   ) {}

   ngOnInit() {
     this.signupForm = new FormGroup({
       pName: new FormControl(null, [
         Validators.required
       ]),
       mName: new FormControl(null, []),
       firstName: new FormControl(null, []),
       curp: new FormControl(null, []),
       genderP: new FormControl(null, []),
       datebornP: new FormControl(null, []),
       ageP: new FormControl(null, []),
       lateralidadP: new FormControl(null, []),
       escolaridadP: new FormControl(null, []),
       therapist_id: new FormControl(null, []),
       diagnostico: new FormControl(null, []),
       estudios: new FormControl(null, []),
       pNameT: new FormControl(null, []),
       mNameT: new FormControl(null, []),
       firstNameT: new FormControl(null, []),
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

     this.consultService
        .getTherapists()
        .then((therapists: User[]) => {
          this.therapists = therapists;
        });
   }

   onSubmit() {
     if (this.signupForm.valid) {
       const { email, password, firstName, pName, mName,
         therapist, curp, datebornP, genderP, ageP, lateralidadP, escolaridadP,
         phone, cellphone, address, extnumber, intnumber, colonia, delegacion, postalcode, state,
         firstNameT, pNameT, mNameT, escolaridadT, ageT}  = this.signupForm.value;
       const userType = 'patient';
       const patientInfo = new Patient('therapist', curp, datebornP, genderP, ageP, lateralidadP, escolaridadP,
       phone, cellphone, address, extnumber, intnumber, colonia, delegacion, postalcode, state,
       firstNameT, pNameT, mNameT, ageT, escolaridadT, []);
       const user = new User(email, password, firstName , pName, mName, userType, null, patientInfo);
       this.authService.signup(user)
         .subscribe(
           us => console.log(us),
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
