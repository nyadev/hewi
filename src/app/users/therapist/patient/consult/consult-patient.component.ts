import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ConsultService } from './consult.service';
import { Router } from '@angular/router';
import { User } from '../../../../auth/user.model';

const paciente = new User('axelcuevas321@gmail.com', '123', 2, 'Ian Axel', 'Cuevas', 'Olvera', 'CUOI001111HDFVLNA5', 'Patient');

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
  patients: User[] = new Array(20).fill(paciente);
  loading = true;




  ngOnInit() {
    this.consultpatientForm = new FormGroup({
      curp: new FormControl(null, Validators.required),
    });
  }

}
