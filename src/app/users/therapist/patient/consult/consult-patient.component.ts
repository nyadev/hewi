import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConsultService } from './consult.service';
import { Router } from '@angular/router';
import { User } from '../../../../auth/user.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consult-patient',
  templateUrl: './consult-patient.component.html',
  styleUrls: ['./consult-patient.component.css'],
  providers: [ ConsultService ]
})

export class ConsultPatientComponent implements OnInit {

  constructor(
    private consultService: ConsultService,
    private title: Title) {

  }

  consultpatientForm: FormGroup;
  patients: User[];
  loading = true;

  ngOnInit() {
    this.title.setTitle('Pacientes');
    this.consultpatientForm = new FormGroup({
      curp: new FormControl(null, Validators.required),
    });

    this.consultService
       .getPatients()
       .then((patients: User[]) => {
         this.patients = patients;
         this.loading = false;
       });
  }
}
