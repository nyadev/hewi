import { Routes, RouterModule } from '@angular/router';

import { RegisterTherapistComponent } from './therapist/register/register-therapist.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'register-therapist', component: RegisterTherapistComponent},
];
