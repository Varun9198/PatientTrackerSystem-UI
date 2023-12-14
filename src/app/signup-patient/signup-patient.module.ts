import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPatientComponent } from './signup-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ]
})
export class SignupPatientModule { }
