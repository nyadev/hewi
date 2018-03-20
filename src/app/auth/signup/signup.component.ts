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
     this.signupForm = new FormGroup(

     );
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
