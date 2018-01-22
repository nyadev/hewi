import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './patient/activity/activity.component';
import { RegisterPatientComponent } from './therapist/patient/register/register-patient.component';
import { HomeComponent } from './home/home.component';
import { RegisterTherapistComponent } from './admin/therapist/register/register-therapist.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'activity', component: ActivityComponent},
  { path: 'register-patient', component: RegisterPatientComponent},
  { path: 'register-therapist', component: RegisterTherapistComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
