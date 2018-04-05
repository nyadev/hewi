import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin/admin-home.component';
import { RegisterTherapistComponent } from './admin/therapist/register/register-therapist.component';

import { TherapistHomeComponent } from './therapist/therapist-home.component';
import { SessionComponent } from './therapist/diary/sessions/session.component';
import { ConsultPatientComponent } from './therapist/patient/consult/consult-patient.component';

import { PatientHomeComponent } from './patient/patient-home.component';

// Actividades
import { Act2AtentionComponent } from './patient/activity/atention/act2/act2.component';

export const USER_ROUTES: Routes = [
  { path: 'register-therapist', component: RegisterTherapistComponent},
];
