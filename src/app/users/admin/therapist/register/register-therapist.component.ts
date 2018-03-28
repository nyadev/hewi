import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { User } from '../../../../auth/user.model';
@Component({
  selector: 'app-register-therapist',
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css']
})

export class RegisterTherapistComponent  implements OnInit {
  registertherapistForm: FormGroup;

  constructor(private AuthService: AuthService){

  }

  ngOnInit() {
    this.registertherapistForm = new FormGroup({
      lNameF: new FormControl(null, [
        Validators.required
      ]),
      lNameM: new FormControl(null, []),
      nome: new FormControl(null, []),
      curp: new FormControl(null, []),
      phone: new FormControl(null, []),
      email: new FormControl(null, []),
      cellphone: new FormControl(null, []),
      username: new FormControl(null, []),
      password: new FormControl(null, []),
      address: new FormControl(null, []),
      extnumber: new FormControl(null, []),
      intnumber: new FormControl(null, []),
      colonia: new FormControl(null, []),
      delegacion: new FormControl(null, []),
      postalcode: new FormControl(null, []),
      state: new FormControl(null, []),
      career: new FormControl(null, []),
      posgrade: new FormControl(null, []),
    });
  }

  onSubmit(){
    if(this.registertherapistForm.valid){
      const { lNameF, lNameM, nome,curp, phone, email, cellphone, username, password, address, extnumber, intnumber, colonia, delegacion, postalcode, state, career, posgrade}  = this.registertherapistForm.value;
      const user = new User(email, password,username,nome , lNameF, lNameM, curp);
      this.AuthService.signup(user)
        .subscribe(
          this.AuthService.login,
          err => console.log(err)
        )
    }
  }
}
