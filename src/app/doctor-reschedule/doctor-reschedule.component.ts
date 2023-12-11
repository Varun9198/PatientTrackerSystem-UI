import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APPOINTMENTS } from "../app.component";

@Component({
  standalone: true, 
  selector: 'app-doctor-reschedule',
  templateUrl: './doctor-reschedule.component.html',
  styleUrls: ['./doctor-reschedule.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})

export class DoctorRescheduleComponent {
  form:FormGroup = this.fb.group({
    appointment_number: ['', Validators.required],
    new_time: ['', Validators.required],
    new_date: ['', Validators.required]
  });
  Cases: APPOINTMENTS[] = [];
  constructor(private fb:FormBuilder){}
  reschedule(){
    let appointment_number = this.form.value.appointment_number;
    let new_time = this.form.value.new_time;
    let new_date = this.form.value.new_date;
    if (appointment_number<=0){
      alert('Invalid appointment id');
    }
    alert('Appointment Rescheduled')
  }
}
