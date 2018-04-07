import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';

// Actividades
// Atencion
import { Act2AtComponent } from './users/patient/activity/atention/act2/act2.component';
// visioespaciales
import { Act1VsComponent } from './users/patient/activity/visiospacial/act1vs/act1_vs.component';
import { Act2VsComponent } from './users/patient/activity/visiospacial/act2vs/act2_vs.component';

import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';
import { ConsultPatientComponent } from './users/therapist/patient/consult/consult-patient.component';

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
    RegisterTherapistComponent,
    RegisterPatientComponent, ConsultPatientComponent, SessionComponent,
    Act2AtComponent, Act1VsComponent, Act2VsComponent,
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
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
