import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css']
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
    email: ['', Validators.required]
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
    let email = this.form.value.email;
    alert('Account Created');
    this.router.navigateByUrl('PatientLogin')
  }

}
