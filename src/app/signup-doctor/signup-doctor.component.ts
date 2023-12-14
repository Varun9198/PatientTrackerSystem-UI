import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { DoctorServiceService } from '../services/doctor-service.service';
import { DOCTOR_SIGNUP } from '../app.component';

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
  });

  constructor(private fb: FormBuilder, private router: Router, private doctorService: DoctorServiceService){}

  signup(){

    let doctorSignup: DOCTOR_SIGNUP = {
      appendedEmail: "doctor:" + this.form.value.username,
      password: this.form.value.password,
      name: this.form.value.name,
      dob: this.form.value.dob,
      hospital: this.form.value.hospital,
      speciality: this.form.value.speciality,
      address: this.form.value.address,
      phoneNumber: this.form.value.phone_number
    };

    this.doctorService.signup_doctor(doctorSignup).subscribe(
      (response) => {
        console.log(response)
        alert('Account Created');
        this.router.navigateByUrl('DoctorLogin')
      },
      (err) => {
        alert("Incorrect details entered.")
      }
    )
  }
}
