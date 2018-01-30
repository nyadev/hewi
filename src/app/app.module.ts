import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { PatientNavlistComponent } from './patient/navlist/patient-navlist.component';
import { ActivityComponent } from './patient/activity/activity.component';
import { RegisterPatientComponent } from './therapist/patient/register/register-patient.component';
import { HomeComponent } from './home/home.component';
import { RegisterTherapistComponent } from './admin/therapist/register/register-therapist.component';
import { TherapistNavlistComponent } from './therapist/navlist/therapist-navlist.component';
import { AdminNavlistComponent } from './admin/navlist/admin-navlist.component';
import { SessionComponent } from './therapist/diary/sessions/session.component';

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
    SessionComponent
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
