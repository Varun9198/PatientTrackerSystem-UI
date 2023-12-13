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
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorUpcomingAppComponent } from './doctor-upcoming-app/doctor-upcoming-app.component';
import { DoctorRescheduleComponent } from './doctor-reschedule/doctor-reschedule.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorUpdateCaseComponent } from './doctor-update-case/doctor-update-case.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientUpcomingAppComponent } from './patient-upcoming-app/patient-upcoming-app.component';
import { PatientCaseHistoryComponent } from './patient-case-history/patient-case-history.component';
import { PatientNewAppointmentComponent } from './patient-new-appointment/patient-new-appointment.component';
import { PatientAppointmentDetailsComponent } from './patient-appointment-details/patient-appointment-details.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientRescheduleComponent } from './patient-reschedule/patient-reschedule.component';

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
  {path: 'DoctorLogin/Profile', component: DoctorProfileComponent},
  {path: 'DoctorLogin/UpcomingAppointments', component: DoctorUpcomingAppComponent},
  {path: 'DoctorLogin/Reschedule', component: DoctorRescheduleComponent},
  {path: 'DoctorLogin/Edit', component: DoctorEditComponent},
  {path: 'DoctorLogin/UpdateCase', component: DoctorUpdateCaseComponent},
  {path: 'PatientLogin/Dashboard', component: PatientDashboardComponent},
  {path: 'PatientLogin/UpcomingAppointments', component: PatientUpcomingAppComponent},
  {path: 'PatientLogin/CaseHistory', component: PatientCaseHistoryComponent},
  {path: 'PatientLogin/NewAppointment', component: PatientNewAppointmentComponent},
  {path: 'PatientLogin/NewAppointment/EnterDetails', component: PatientAppointmentDetailsComponent},
  {path: 'PatientLogin/Profile', component: PatientProfileComponent},
  {path: 'PatientLogin/Edit', component: PatientEditComponent},
  {path: 'PatientLogin/Reschedule', component: PatientRescheduleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
