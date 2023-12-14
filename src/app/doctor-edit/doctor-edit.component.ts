import {CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DoctorServiceService} from "../services/doctor-service.service";
import {DOCTORS, EDIT_DOCTOR} from "../app.component";

@Component({
  standalone: true,
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})

export class DoctorEditComponent implements OnInit{

  form:FormGroup = this.fb.group({
    hospital: ['', Validators.required],
    speciality: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  constructor(private fb:FormBuilder,
              private router:Router, private doctorService:DoctorServiceService){
  }

  ngOnInit() {

    const id = localStorage.getItem('user_id') ?? "-1"

    this.doctorService.get_doctor_by_id(id).subscribe(
      (response) => {

        const doctor: DOCTORS = response.body;

        this.form.patchValue({
          address: doctor.address,
          hospital: doctor.hospital,
          speciality: doctor.speciality,
          phone_number: doctor.phoneNumber
        });
      }
    )
  }
  submit(){
    const id = localStorage.getItem('user_id') ?? "-1"
    let hospital = this.form.value.hospital;
    let speciality = this.form.value.speciality;
    let address = this.form.value.address;
    let phone_number = this.form.value.phone_number;

    let editDoctorInstance: EDIT_DOCTOR = {
      doctorId: id,
      hospital: hospital as String, // Casting to String object, if required
      speciality: speciality as String,
      address: address as String,
      phoneNumber: phone_number as String,
    };
    this.doctorService.edit_details(editDoctorInstance).subscribe(
      (response) => {
        console.log(response)
        alert('Profile Updated');
        this.router.navigateByUrl('DoctorLogin/Profile')
      },
      (err) => {
        alert("Profile can't be updated.")
      }
    )
  }
}
