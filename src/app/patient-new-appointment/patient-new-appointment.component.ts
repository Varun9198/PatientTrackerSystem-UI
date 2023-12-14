import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DOCTORS } from "../app.component";
import {SearchServiceService} from "../services/search-service.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";


@Component({
  standalone: true,
  selector: 'app-patient-new-appointment',
  templateUrl: './patient-new-appointment.component.html',
  styleUrls: ['./patient-new-appointment.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientNewAppointmentComponent implements OnInit{
  form: FormGroup = this.fb.group({
    speciality: [''],
    location: [''],
    name: ['']
  });
  form1: FormGroup = this.fb.group({
    doctor_id: ['', Validators.required]
  });
  Doctors: DOCTORS[] = [];
  constructor(private fb: FormBuilder, private router: Router, private searchService: SearchServiceService){}

  ngOnInit() {
    this.filter()
  }

  filter(){
    this.searchService.get_doctor_by_search(this.form.value.speciality, this.form.value.location,
      this.form.value.name).subscribe(
      (response) => {
        this.Doctors = response.body
      }, (err) =>{
        alert('Error fetching doctor details')
        this.Doctors = []
      }
    )
  }

  select_doctor(){
    localStorage.setItem("BookingTempDoctorID", this.form1.value.doctor_id)
    this.router.navigate(['PatientLogin/NewAppointment/EnterDetails']);
  }
}
