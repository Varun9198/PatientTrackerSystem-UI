import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css'],
  imports: [ReactiveFormsModule],
})
export class LoginPatientComponent {
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) {}
  login(){
    let username = this.form.value.username;
    let password = this.form.value.password;
    this.router.navigate(['PatientLogin/Dashboard'])
  }

  signup(){
    this.router.navigate(['PatientLogin/Signup'])
  }
}
