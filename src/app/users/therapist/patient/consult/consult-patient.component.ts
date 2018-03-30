import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-consult-patient',
  templateUrl: './consult-patient.component.html',
  styleUrls: ['./consult-patient.component.css']
})

export class ConsultPatientComponent implements OnInit {
  consultpatientForm: FormGroup;

  ngOnInit() {
    this.consultpatientForm = new FormGroup({
      curp: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      LNameP: new FormControl(null, Validators.required),
      LNameM: new FormControl(null, Validators.required),
    });
  }

}
