import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Custom Components
import { AdminHomeComponent } from './users/admin/admin-home.component'
import { ActivityComponent } from './users/patient/activity/activity.component';
import { RegisterPatientComponent } from './users/therapist/patient/register/register-patient.component';
import { HomeComponent } from './users/home.component';
import { RegisterTherapistComponent } from './users/admin/therapist/register/register-therapist.component';
import { SessionComponent } from './users/therapist/diary/sessions/session.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './fail/notfound.component';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    RegisterPatientComponent,
    HomeComponent,
    RegisterTherapistComponent,
    SessionComponent,
    LoginComponent,
    SigninComponent,
    NotFoundComponent,
    AdminHomeComponent
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
