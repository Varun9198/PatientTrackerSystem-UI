import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientServiceService } from './services/patient-service.service';
import { DoctorServiceService } from './services/doctor-service.service';
import { CaseServiceService } from './services/case-service.service';
import { AppointmentServiceService } from './services/appointment-service.service';
import { PasswordChangeService } from './services/password-change.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PatientServiceService, DoctorServiceService, CaseServiceService, AppointmentServiceService, PasswordChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
