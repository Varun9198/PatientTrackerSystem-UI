import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";

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

  constructor(private fb: FormBuilder, private router: Router){}
  
  signup(){
    let username = this.form.value.username;
    let password = this.form.value.password;
    let name = this.form.value.name;
    let dob = this.form.value.dob;
    let weight = this.form.value.weight;
    let height = this.form.value.height;
    let address = this.form.value.address;
    let phone_number = this.form.value.phone_number;
    alert('Account Created');
    this.router.navigateByUrl('PatientLogin')
  }

}
