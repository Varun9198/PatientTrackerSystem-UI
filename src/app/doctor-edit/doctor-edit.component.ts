import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})

export class DoctorEditComponent {

  form:FormGroup = this.fb.group({
    hospital: ['', Validators.required],
    speciality: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private router:Router){}

  submit(){
    let hospital = this.form.value.hospital;
    let speciality = this.form.value.speciality;
    let address = this.form.value.address;
    let phone_number = this.form.value.phone_number;

    alert('Profile Updated');
    this.router.navigateByUrl('DoctorLogin/Profile')
  }
}
