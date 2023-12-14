import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from "@angular/router";
import { DoctorServiceService } from '../services/doctor-service.service';
import { USER_LOGIN } from '../app.component';

@Component({
  standalone: true,
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css'],
  imports: [ReactiveFormsModule],
})

export class LoginDoctorComponent implements OnInit {
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
      localStorage.clear()
  }
  constructor(private fb: FormBuilder, private router: Router, private doctorService: DoctorServiceService) {}

  login(){
    let appendedUsername = 'doctor:' + this.form.value.username;
    let password = this.form.value.password;
    let userLogin: USER_LOGIN = {
      appendedUsername: appendedUsername,
      password: password
    }
    this.doctorService.login_doctor(userLogin).subscribe(
      (response) => {
          console.log(response)
          localStorage.setItem('user_id', response['body']['userId'])
          localStorage.setItem('bearer_token', 'Bearer ' + response['body']['token'])
          this.router.navigate(['DoctorLogin/Dashboard']);
      },
      (error) => {
        alert("Incorrect details entered.")
      }
    )
  }

  signup(){
    this.router.navigate(['DoctorLogin/Signup'])
  }

  homepage(){
    this.router.navigate([''])
  }
}
