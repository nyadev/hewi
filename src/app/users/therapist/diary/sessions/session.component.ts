import { Component } from '@angular/core';
import { Session } from './session.model';

const session = new Session(1, 'CURP', new Date(), 1, 'Observaciones');

@Component({
  selector: 'app-therapist-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  sessions = new Array(5).fill(session);
}
