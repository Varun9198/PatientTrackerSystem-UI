import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginDoctorComponent} from './login-doctor/login-doctor.component'

const routes: Routes = [
  {path: '', component: LoginDoctorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
