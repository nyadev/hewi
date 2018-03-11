import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin/admin-home.component';

export const USER_ROUTES: Routes = [
  { path: 'admin', component: AdminHomeComponent, data: {title: 'Hola'}}
];
