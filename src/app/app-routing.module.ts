import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {LoginDoctorComponent} from './login-doctor/login-doctor.component'
import { LoginPatientComponent } from "./login-patient/login-patient.component";
import { SignupDoctorComponent } from './signup-doctor/signup-doctor.component';
import { SignupPatientComponent } from './signup-patient/signup-patient.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'DoctorLogin', component: LoginDoctorComponent},
  {path: 'PatientLogin', component: LoginPatientComponent},
  {path: 'DoctorLogin/Signup', component: SignupDoctorComponent},
  {path: 'PatientLogin/Signup', component: SignupPatientComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
