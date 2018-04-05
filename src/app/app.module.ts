import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { AdminHomeComponent } from './users/admin/admin-home.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';

import { PatientHomeComponent } from './users/patient/patient-home.component';

// Actividades
// Atencion
import { Act2AtentionComponent } from './users/patient/activity/atention/act2/act2.component';
// visioespaciales
import { Act1vsComponent } from './users/patient/activity/visiospacial/act1vs/act1_vs.component';

import { TherapistHomeComponent } from './users/therapist/therapist-home.component';
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
    AdminHomeComponent, RegisterTherapistComponent,
    TherapistHomeComponent, RegisterPatientComponent, ConsultPatientComponent, SessionComponent,
    PatientHomeComponent, Act2AtentionComponent, Act1vsComponent,
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
