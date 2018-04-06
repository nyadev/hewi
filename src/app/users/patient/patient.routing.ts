import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { Act2AtentionComponent } from './activity/atention/act2/act2.component';
import { Act1vsComponent } from './activity/visiospacial/act1vs/act1_vs.component';
import { Act2vsComponent } from './activity/visiospacial/act2vs/act2_vs.component';

export const PATIENT_ROUTES: Routes = [
  { path: 'aat2', component: Act2AtentionComponent},
  { path: 'avs1', component: Act1vsComponent},
  { path: 'avs2', component: Act2vsComponent},
=======
import { Act2AtComponent } from './activity/atention/act2/act2.component';
import { Act1VsComponent } from './activity/visiospacial/act1vs/act1_vs.component';

export const PATIENT_ROUTES: Routes = [
  { path: 'aat2', component: Act2AtComponent},
  { path: 'avs1', component: Act1VsComponent},
>>>>>>> 8104105b276bc3f0cd8c188d373e88a0eabfa476
];
