import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

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
  constructor(private fb: FormBuilder) {}
  login(){
    let username = this.form.value.username;
    let password = this.form.value.password;
  }
}
