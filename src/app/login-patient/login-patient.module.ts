import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPatientComponent } from './login-patient.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LoginPatientComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class LoginPatientModule { }
