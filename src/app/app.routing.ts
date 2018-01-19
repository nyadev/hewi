import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './patient/activity/activity.component';
import { RegisterPatientComponent } from './therapist/patient/register/register-patient.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'activity', component: ActivityComponent},
  { path: 'register', component: RegisterPatientComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
