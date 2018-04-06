import { Routes, RouterModule } from '@angular/router';

import { Act2AtComponent } from './activity/atention/act2/act2.component';
import { Act1VsComponent } from './activity/visiospacial/act1vs/act1_vs.component';

export const PATIENT_ROUTES: Routes = [
  { path: 'aat2', component: Act2AtComponent},
  { path: 'avs1', component: Act1VsComponent},
];
