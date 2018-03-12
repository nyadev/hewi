import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import { SessionService } from './session.service';

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
          this.sessions = sessions;
        });
   }
}
