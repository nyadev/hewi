import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './patient/activity/activity.component';
import { RegisterPatientComponent } from './therapist/patient/register/register-patient.component';
import { HomeComponent } from './home/home.component';
import { RegisterTherapistComponent } from './admin/therapist/register/register-therapist.component';
import { SessionComponent } from './therapist/diary/sessions/session.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'patient/activity', component: ActivityComponent},
  { path: 'therapist/sessions', component: SessionComponent},
  { path: 'admin/register-therapist', component: RegisterTherapistComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
