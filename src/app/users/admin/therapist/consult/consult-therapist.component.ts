import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConsultService } from './consult.service';
import { Router } from '@angular/router';
import { User } from '../../../../auth/user.model';

@Component({
  selector: 'app-consult-therapist',
  templateUrl: './consult-therapist.component.html',
  styleUrls: ['./consult-therapist.component.css'],
  providers: [ ConsultService ]
})

export class ConsultTherapistComponent implements OnInit {

  constructor(private consultService: ConsultService) {

  }

  consulttherapistForm: FormGroup;
  therapists: User[];
  loading = true;

  ngOnInit() {
    this.consulttherapistForm = new FormGroup({
      curp: new FormControl(null, Validators.required),
    });

    this.consultService
       .getTherapists()
       .then((therapists: User[]) => {
         this.therapists = therapists;
         this.loading = false;
       });
  }
}
