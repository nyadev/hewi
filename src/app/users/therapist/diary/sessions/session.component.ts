import { Component, OnInit } from '@angular/core';
import { Session } from './session.model';
import {sessionService} from './sesion.service';

//const session = new Session(1, 'CURP', new Date(), 1, 'Observaciones');


@Component({
  selector: 'app-therapist-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [sessionService]
})
export class SessionComponent implements OnInit {
  constructor(private SessionService : sessionService){

  }

//  sessions = new Array(5).fill(session);
    sessions : sesion[]:
    loading : true;

   ngOnInit(){
     this.SessionService
        .getSessions()
        .then((sessions: sessions[])=>{
          this.sessions = sessions;
        });
   }
}
