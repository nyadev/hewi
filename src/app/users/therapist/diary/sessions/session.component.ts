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
    loading = true;

   ngOnInit() {
     this.sessionService
        .getSessions()
        .then((sessions: Session[]) => {
          console.log(sessions[0].date);
          this.sessions = sessions;
          this.loading = false;
        });
   }

   addEvent(date: MatDatepickerInputEvent<Date>) {
     this.sessionService
        .getSession(date)
        .then((sessions: Session[]) => {
          this.sessions = sessions;
          this.loading = false;
        });
   }
}
