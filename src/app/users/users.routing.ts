import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActivityComponent } from './patient/activity/activity.component';

export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
];
