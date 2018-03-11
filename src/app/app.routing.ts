import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './users/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './fail/notfound.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';

import { USER_ROUTES } from './users/users.routing';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'user', component: HomeComponent, children: USER_ROUTES},
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: '**', component: NotFoundComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
