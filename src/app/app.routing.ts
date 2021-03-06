import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './users/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './fail/notfound.component';

import { ADMIN_ROUTES } from './users/admin/admin.routing';
import { THERAPIST_ROUTES} from './users/therapist/therapist.routing';
import { PATIENT_ROUTES } from './users/patient/patient.routing';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'admin', children: ADMIN_ROUTES},
  { path: 'therapist', children: THERAPIST_ROUTES},
  { path: 'patient', children: PATIENT_ROUTES},
  { path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
