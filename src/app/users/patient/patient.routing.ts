import { Routes, RouterModule } from '@angular/router';

import { Act2AtComponent } from './activity/atention/act2at/act2_at.component';

import { Act1VsComponent } from './activity/visiospacial/act1vs/act1_vs.component';
import { Act2VsComponent } from './activity/visiospacial/act2vs/act2_vs.component';
import { Act3VsComponent } from './activity/visiospacial/act3vs/act3_vs.component';
import { Act4VsComponent } from './activity/visiospacial/act4vs/act4_vs.component';

export const PATIENT_ROUTES: Routes = [
  //Atención
  { path: 'aat2', component: Act2AtComponent},
  //Viseoespaciales
  { path: 'avs1', component: Act1VsComponent},
  { path: 'avs2', component: Act2VsComponent},
  { path: 'avs3', component: Act3VsComponent},
  { path: 'avs4', component: Act4VsComponent},
]
