import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './users/patient/activity/activity.component';
import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { HomeComponent } from './users/home/home.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';
import { LoginComponent } from './auth/login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'patient/activity', component: ActivityComponent},
  { path: 'therapist/sessions', component: SessionComponent},
  { path: 'admin/register-therapist', component: RegisterTherapistComponent},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
