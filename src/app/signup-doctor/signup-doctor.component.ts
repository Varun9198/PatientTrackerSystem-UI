import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css'],
  imports: [ReactiveFormsModule]
})
export class SignupDoctorComponent {
  
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    dob: ['', Validators.required],
    hospital: ['', Validators.required],
    speciality: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router){}
  
  signup(){
    let username = this.form.value.username;
    let password = this.form.value.password;
    let name = this.form.value.name;
    let dob = this.form.value.dob;
    let hospital = this.form.value.hospital;
    let speciality = this.form.value.speciality;
    let address = this.form.value.address;
    let phone_number = this.form.value.phone_number;
    let email = this.form.value.email;

    alert('Account Created');
    this.router.navigateByUrl('DoctorLogin')
  }
}
