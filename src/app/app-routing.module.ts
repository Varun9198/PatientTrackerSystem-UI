import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {LoginDoctorComponent} from './login-doctor/login-doctor.component'
import { LoginPatientComponent } from "./login-patient/login-patient.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'DoctorLogin', component: LoginDoctorComponent},
  {path: 'PatientLogin', component: LoginPatientComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
