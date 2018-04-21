import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import { SessionService } from './session.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
import { ConsultService } from '../../patient/consult/consult.service';
import { User } from '../../../../auth/user.model';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-therapist-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [ SessionService, ConsultService ]
})
export class SessionComponent implements OnInit {

    sessionForm: FormGroup;

  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private consultService: ConsultService,
    private router: Router,
    private snackBar: MatSnackBar,
    private title: Title) {

  }
    sessions: Session[];
    patients: User[];
    sessionsDate: Session[];
    loading = true;
    today: Date = new Date();

   ngOnInit() {
     this.title.setTitle('Hewi - Sesiones');

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

      this.consultService
         .getPatients()
         .then((patients: User[]) => {
           this.patients = patients;
           this.loading = false;
         });
   }

    onSubmit(form: NgForm) {
      if (!this.authService.isLoggedIn()) {
        this.router.navigateByUrl('/signin');
      }

      if (this.sessionForm.valid) {
        const session = new Session(
        null,
        this.authService.currentUser.curp,
        form.value.curp,
        form.value.fecha.toLocaleDateString('en-US'),
        form.value.hora,
        form.value.noSession,
        form.value.observaciones
        );
       this.sessionService
       .addSession(session)
       .subscribe(
         s => {
           this.sessions.push(s);
           this.snackBar.open('Se ha creado la sesión correctamente', 'x', { duration: 2000});
         },
          this.authService.handleError
       );



       form.resetForm();

     }else {
       this.snackBar.open('Debes llenar todos los campos', 'x', { duration: 2000});
     }
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
