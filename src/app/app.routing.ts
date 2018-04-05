import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './users/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './fail/notfound.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';
import { ConsultPatientComponent } from './users/therapist/patient/consult/consult-patient.component';

import { USER_ROUTES } from './users/users.routing';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'admin', children: USER_ROUTES},
  { path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
