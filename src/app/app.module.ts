import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientServiceService } from './patient-service.service';
import { DoctorServiceService } from './doctor-service.service';
import { CaseServiceService } from './case-service.service';
import { AppointmentServiceService } from './appointment-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PatientServiceService, DoctorServiceService, CaseServiceService, AppointmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
