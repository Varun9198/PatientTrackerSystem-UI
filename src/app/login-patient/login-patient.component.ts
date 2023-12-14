import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from "@angular/router";
import { PatientServiceService } from "../services/patient-service.service";
import { USER_LOGIN } from "../app.component";

@Component({
  standalone: true,
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css'],
  imports: [ReactiveFormsModule],
})
export class LoginPatientComponent implements OnInit{
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    localStorage.clear()
  }

  constructor(private fb: FormBuilder, private router: Router, private patientService: PatientServiceService) {}

  login(){
    let appendedUsername = 'patient:' + this.form.value.username;
    let password = this.form.value.password;
    let userLogin: USER_LOGIN = {
      appendedUsername: appendedUsername,
      password: password
    }
    this.patientService.login_patient(userLogin).subscribe(
      (response) => {
          console.log(response)
          localStorage.setItem('user_id', response['body']['userId'])
          localStorage.setItem('bearer_token', 'Bearer ' + response['body']['token'])
          this.router.navigate(['PatientLogin/Dashboard']);
      },
      (error) => {
        alert("Incorrect details entered.")
      }
    )
  }

  signup(){
    this.router.navigate(['PatientLogin/Signup'])
  }

  homepage(){
    this.router.navigate([''])
  }
}
