import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { PatientServiceService } from '../services/patient-service.service';
import { PATIENT_SIGNUP } from '../app.component';

@Component({
  standalone: true,
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css'],
  imports: [ReactiveFormsModule]
})
export class SignupPatientComponent {

  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    dob: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private patientService: PatientServiceService){}
  
  signup(){
    let patientSignup: PATIENT_SIGNUP = {
      appendedEmail: this.form.value.username,
      password: this.form.value.password,
      name: this.form.value.name,
      dob: this.form.value.dob,
      weight: this.form.value.weight,
      height: this.form.value.height,
      address: this.form.value.address,
      phoneNumber: this.form.value.phone_number
    };

    this.patientService.signup_patient(patientSignup).subscribe(
      (response) => {
        console.log(response)
        alert('Account Created');
        this.router.navigateByUrl('PatientLogin')
      },
      (err) => {
        alert("Incorrect details entered.")
      }
    )
  }

}
