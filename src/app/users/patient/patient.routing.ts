import { Routes, RouterModule } from '@angular/router';

import { ActnTypeComponent } from './activity/atention/act_template/actn_type.component';

import { Act1AtComponent } from './activity/atention/act1at/act1_at.component';
import { Act2AtComponent } from './activity/atention/act2at/act2_at.component';
import { Act3AtComponent } from './activity/atention/act3at/act3_at.component';
import { Act4AtComponent } from './activity/atention/act4at/act4_at.component';
import { Act5AtComponent } from './activity/atention/act5at/act5_at.component';
import { Act6AtComponent } from './activity/atention/act6at/act6_at.component';
import { Act7AtComponent } from './activity/atention/act7at/act7_at.component';
import { Act8AtComponent } from './activity/atention/act8at/act8_at.component';
import { Act9AtComponent } from './activity/atention/act9at/act9_at.component';

import { Act1VsComponent } from './activity/visiospacial/act1vs/act1_vs.component';
import { Act2VsComponent } from './activity/visiospacial/act2vs/act2_vs.component';
import { Act3VsComponent } from './activity/visiospacial/act3vs/act3_vs.component';
import { Act4VsComponent } from './activity/visiospacial/act4vs/act4_vs.component';
import { Act5VsComponent } from './activity/visiospacial/act5vs/act5_vs.component';
import { Act6VsComponent } from './activity/visiospacial/act6vs/act6_vs.component';
import { Act7VsComponent } from './activity/visiospacial/act7vs/act7_vs.component';
import { Act8VsComponent } from './activity/visiospacial/act8vs/act8_vs.component';
import { Act10VsComponent } from './activity/visiospacial/act10vs/act10_vs.component';
import { Act11VsComponent } from './activity/visiospacial/act11vs/act11_vs.component';
import { Act16VsComponent } from './activity/visiospacial/act16vs/act16_vs.component';

export const PATIENT_ROUTES: Routes = [
  //Atención
  { path: 'aat1', component: ActnTypeComponent},
  { path: 'aat2', component: Act2AtComponent},
  { path: 'aat3', component: Act3AtComponent},
  { path: 'aat4', component: Act4AtComponent},
  { path: 'aat5', component: Act5AtComponent},
  { path: 'aat6', component: Act6AtComponent},
  { path: 'aat7', component: Act7AtComponent},
  { path: 'aat8', component: Act8AtComponent},
  { path: 'aat9', component: Act9AtComponent},

  //Viseoespaciales
  { path: 'avs1', component: Act1VsComponent},
  { path: 'avs2', component: Act2VsComponent},
  { path: 'avs3', component: Act3VsComponent},
  { path: 'avs4', component: Act4VsComponent},
  { path: 'avs5', component: Act5VsComponent},
  { path: 'avs6', component: Act6VsComponent},
  { path: 'avs7', component: Act7VsComponent},
  { path: 'avs8', component: Act8VsComponent},
  { path: 'avs10', component: Act10VsComponent},
  { path: 'avs11', component: Act11VsComponent},
  { path: 'avs16', component: Act16VsComponent},
]
