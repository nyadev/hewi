import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { AdminHomeComponent } from './users/admin/admin-home.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';

import { PatientHomeComponent } from './users/patient/patient-home.component';
import { ActivityComponent } from './users/patient/activity/activity.component';

import { TherapistHomeComponent } from './users/therapist/therapist-home.component';
import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';

import { HomeComponent } from './users/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './fail/notfound.component';

import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent, RegisterTherapistComponent,
    TherapistHomeComponent, RegisterPatientComponent, SessionComponent,
    PatientHomeComponent, ActivityComponent,
    LoginComponent,
    SigninComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
