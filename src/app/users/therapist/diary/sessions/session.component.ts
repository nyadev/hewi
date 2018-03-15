import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import { SessionService } from './session.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-therapist-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [ SessionService ]
})
export class SessionComponent implements OnInit {

  constructor(private sessionService: SessionService) {

  }
    sessions: Session[];
    sessionsDate: Session[];
    loading = true;

   ngOnInit() {
     this.sessionService
        .getSessions()
        .then((sessions: Session[]) => {
          this.sessions = sessions;
          this.loading = false;
        });
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
