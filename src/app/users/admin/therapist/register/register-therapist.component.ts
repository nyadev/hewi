import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})

export class RegisterTherapistComponent {
  registertherapistForm: FormGroup;
}
