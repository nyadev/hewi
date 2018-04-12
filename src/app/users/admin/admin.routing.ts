import { Routes, RouterModule } from '@angular/router';

import { RegisterTherapistComponent } from './therapist/register/register-therapist.component';
import { ConsultTherapistComponent } from './therapist/consult/consult-therapist.component';
import { TherapistDetailComponent } from './therapist/detail/therapist-detail.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'register-therapist', component: RegisterTherapistComponent},
  { path: 'consult-therapist', component: ConsultTherapistComponent },
  { path: 'consult/:curp', component: TherapistDetailComponent }
];
