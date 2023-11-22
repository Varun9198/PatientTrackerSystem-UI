import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css'],
  imports: [ReactiveFormsModule],
})

export class LoginDoctorComponent {
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router) {}
  login(){
    let username = this.form.value.username;
    let password = this.form.value.password; 
    this.router.navigate(['DoctorLogin/Dashboard']);
  }

  signup(){
    this.router.navigate(['DoctorLogin/Signup'])
  }
}
