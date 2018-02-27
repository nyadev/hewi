import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { PatientNavlistComponent } from './patient/navlist/patient-navlist.component';
import { SessionComponent } from './therapist/diary/sessions/session.component';


export const USER_ROUTES: Routes = [
  { path: '', component: PatientNavlistComponent, outlet: 'navlist'},
  { path: '', component: SessionComponent, outlet: 'content'}
];
