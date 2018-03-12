import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin/admin-home.component';
import { RegisterTherapistComponent } from './admin/therapist/register/register-therapist.component';

import { TherapistHomeComponent } from './therapist/therapist-home.component';
import { SessionComponent } from './therapist/diary/sessions/session.component';

import { PatientHomeComponent } from './patient/patient-home.component';
import { ActivityComponent } from './patient/activity/activity.component';

export const USER_ROUTES: Routes = [
  { path: 'admin', component: AdminHomeComponent},
  { path: 'admin/register', component: RegisterTherapistComponent},
  { path: 'therapist', component: TherapistHomeComponent },
  { path: 'therapist/sessions', component: SessionComponent},
  { path: 'patient', component: PatientHomeComponent},
  { path: 'patient/activity', component: ActivityComponent }
];
