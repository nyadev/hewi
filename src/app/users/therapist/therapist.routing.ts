import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './diary/sessions/session.component';
import { ConsultPatientComponent } from './patient/consult/consult-patient.component';

export const THERAPIST_ROUTES: Routes = [
  { path: 'sessions', component: SessionComponent },
  { path: 'consult', component: ConsultPatientComponent },
  // { path: 'consult/:curpp', component: ConsultPatientComponent }
];
