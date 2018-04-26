import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
//Administrador
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';
import { ConsultTherapistComponent } from './users/admin/therapist/consult/consult-therapist.component';
import { TherapistDetailComponent } from './users/admin/therapist/detail/therapist-detail.component';

// Terapeuta
import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';
import { ConsultPatientComponent } from './users/therapist/patient/consult/consult-patient.component';
import { PatientDetailComponent } from './users/therapist/patient/detail/patient-detail.component';

// Actividades
// Atencion
import { Act1AtComponent } from './users/patient/activity/atention/act1at/act1_at.component';
import { Act2AtComponent } from './users/patient/activity/atention/act2at/act2_at.component';
import { Act3AtComponent } from './users/patient/activity/atention/act3at/act3_at.component';
import { Act4AtComponent } from './users/patient/activity/atention/act4at/act4_at.component';
import { Act5AtComponent } from './users/patient/activity/atention/act5at/act5_at.component';
import { Act6AtComponent } from './users/patient/activity/atention/act6at/act6_at.component';
// visioespaciales
import { Act1VsComponent } from './users/patient/activity/visiospacial/act1vs/act1_vs.component';
import { Act2VsComponent } from './users/patient/activity/visiospacial/act2vs/act2_vs.component';
import { Act3VsComponent } from './users/patient/activity/visiospacial/act3vs/act3_vs.component';
import { Act4VsComponent } from './users/patient/activity/visiospacial/act4vs/act4_vs.component';
import { Act5VsComponent } from './users/patient/activity/visiospacial/act5vs/act5_vs.component';
import { Act6VsComponent } from './users/patient/activity/visiospacial/act6vs/act6_vs.component';
import { Act7VsComponent } from './users/patient/activity/visiospacial/act7vs/act7_vs.component';
import { Act8VsComponent } from './users/patient/activity/visiospacial/act8vs/act8_vs.component';
import { Act10VsComponent } from './users/patient/activity/visiospacial/act10vs/act10_vs.component';
import { Act11VsComponent } from './users/patient/activity/visiospacial/act11vs/act11_vs.component';
import { Act16VsComponent } from './users/patient/activity/visiospacial/act16vs/act16_vs.component';

import { HomeComponent } from './users/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotFoundComponent } from './fail/notfound.component';

import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterTherapistComponent,ConsultTherapistComponent, TherapistDetailComponent,
    PatientDetailComponent, ConsultPatientComponent, SessionComponent,
    Act2AtComponent, Act1AtComponent, Act3AtComponent, Act4AtComponent,
    Act5AtComponent, Act6AtComponent,
    Act1VsComponent, Act2VsComponent, Act3VsComponent, Act4VsComponent,
    Act5VsComponent, Act6VsComponent, Act7VsComponent, Act8VsComponent,
    Act16VsComponent, Act10VsComponent, Act11VsComponent,
    RegisterTherapistComponent,
    RegisterPatientComponent, ConsultPatientComponent, SessionComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  providers: [Title, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
