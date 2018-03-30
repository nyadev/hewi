import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConsultService } from './consult.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-patient',
  templateUrl: './consult-patient.component.html',
  styleUrls: ['./consult-patient.component.css'],
  providers: [ ConsultService ]
})

export class ConsultPatientComponent implements OnInit {

  constructor(private consultService: ConsultService) {

  }

  consultpatientForm: FormGroup;
  patient: Patients[];
  loading = true;




  ngOnInit() {
    this.consultpatientForm = new FormGroup({
      curp: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      LNameP: new FormControl(null, Validators.required),
      LNameM: new FormControl(null, Validators.required),
    });
  }

}
