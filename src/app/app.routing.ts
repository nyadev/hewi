import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './users/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { USER_ROUTES } from './users/users.routing';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'user', children: USER_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
