import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import { SessionService } from './session.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-therapist-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [ SessionService ]
})
export class SessionComponent implements OnInit {

    sessionForm: FormGroup;

  constructor(private sessionService: SessionService, private authService: AuthService) {

  }
    sessions: Session[];
    sessionsDate: Session[];
    loading = true;

   ngOnInit() {
     this.sessionForm = new FormGroup({
       curp: new FormControl(null, Validators.required),
       hora: new FormControl(null, Validators.required),
       fecha: new FormControl(null, Validators.required),
       noSession: new FormControl(null, Validators.required),
       observaciones: new FormControl(null, Validators.required),
     });

     this.sessionService
        .getSessions()
        .then((sessions: Session[]) => {
          this.sessions = sessions;
          this.loading = false;
        });
   }

   onSubmit(form: NgForm) {
      const s = new Session(
      null,
      this.authService.currentUser.curp,
      form.value.curp,
      form.value.fecha.toLocaleDateString('en-US'),
      form.value.hora,
      form.value.noSession,
      form.value.observaciones
      );
     this.sessionService.addSession(s)
     .subscribe(
       ({ _id }) => console.log(_id),
       error => console.log(error)
     );
     form.resetForm();
   }

   addEvent(date: MatDatepickerInputEvent<Date>) {
     this.loading = true;
     this.sessionService
        .getSession()
        .then((sessions: Session[]) => {
          console.log(sessions[0].date);
          console.log(date.value.toLocaleDateString('en-US'));
          function compareDate(element, index, array) {
            return (element.date === date.value.toLocaleDateString('en-US'));
          }
          this.sessions = sessions.filter(compareDate);
          this.loading = false;
        });
   }
}
