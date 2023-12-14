import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import { PatientServiceService } from '../services/patient-service.service';
import { EDIT_PATIENT, PATIENTS } from '../app.component';


@Component({
  standalone: true,
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientEditComponent implements OnInit{

  form:FormGroup = this.fb.group({
    weight: ['', Validators.required],
    height: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  constructor(private patientService: PatientServiceService, private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    const id = localStorage.getItem('user_id') ?? "-1"

    this.patientService.get_patient_by_id(id).subscribe(
      (response) => {

        const patient: PATIENTS = response.body;

        this.form.patchValue({
          address: patient.address,
          height: patient.height,
          weight: patient.weight,
          phone_number: patient.phoneNumber
        });
      }
    )
  }

  submit(){
    const id = localStorage.getItem('user_id') ?? "-1"
    let height = this.form.value.height
    let weight = this.form.value.weight;
    let address = this.form.value.address;
    let phone_number = this.form.value.phone_number;

    let editPatientInstance: EDIT_PATIENT = {
      patientId: id,
      height: height as String, // Casting to String object, if required
      weight: weight as String,
      address: address as String,
      phoneNumber: phone_number as String,
    };
    this.patientService.edit_details(editPatientInstance).subscribe(
      (response) => {
        console.log(response)
        alert('Profile Updated');
        this.router.navigateByUrl('PatientLogin/Profile')
      },
      (err) => {
        alert("Profile can't be updated.")
      }
    )
  }

}
