import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step = 0;

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
