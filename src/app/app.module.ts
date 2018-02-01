import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { PatientNavlistComponent } from './users/patient/navlist/patient-navlist.component';
import { ActivityComponent } from './users/patient/activity/activity.component';
import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { HomeComponent } from './users/home/home.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';
import { TherapistNavlistComponent } from './users/therapist/navlist/therapist-navlist.component';
import { AdminNavlistComponent } from './users/admin/navlist/admin-navlist.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';
import { LoginComponent } from './auth/login/login.component';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PatientNavlistComponent,
    ActivityComponent,
    RegisterPatientComponent,
    HomeComponent,
    RegisterTherapistComponent,
    TherapistNavlistComponent,
    AdminNavlistComponent,
    SessionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
