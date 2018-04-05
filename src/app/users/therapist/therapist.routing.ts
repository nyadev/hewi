import { Routes, RouterModule } from '@angular/router';

import { SessionComponent } from './diary/sessions/session.component';

export const THERAPIST_ROUTES: Routes = [
  { path: 'sessions', component: SessionComponent},
];
