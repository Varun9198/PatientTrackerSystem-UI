import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {LoginDoctorComponent} from './login-doctor/login-doctor.component'
import { LoginPatientComponent } from "./login-patient/login-patient.component";
import { SignupDoctorComponent } from './signup-doctor/signup-doctor.component';
import { SignupPatientComponent } from './signup-patient/signup-patient.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorCaseHistoryComponent } from './doctor-case-history/doctor-case-history.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'DoctorLogin', component: LoginDoctorComponent},
  {path: 'PatientLogin', component: LoginPatientComponent, },
  {path: 'DoctorLogin/Signup', component: SignupDoctorComponent},
  {path: 'PatientLogin/Signup', component: SignupPatientComponent},
  {path: 'DoctorLogin/ForgotPassword', component: ForgotPassComponent},
  {path: 'PatientLogin/ForgotPassword', component: ForgotPassComponent},
  {path: 'DoctorLogin/Dashboard', component: DoctorDashboardComponent},
  {path: 'DoctorLogin/CaseHistory', component: DoctorCaseHistoryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
