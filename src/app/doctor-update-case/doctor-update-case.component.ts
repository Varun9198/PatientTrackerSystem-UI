import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CASES } from "../app.component";


@Component({
  standalone: true,
  selector: 'app-doctor-update-case',
  templateUrl: './doctor-update-case.component.html',
  styleUrls: ['./doctor-update-case.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DoctorUpdateCaseComponent {
  form:FormGroup = this.fb.group({
    case_id: ['', Validators.required],
    close_date: [],
    symptoms: ['', Validators.required],
    medicines: ['', Validators.required],
    cost: ['', Validators.required]
  });
  Cases: CASES[] = [];
  constructor(private fb:FormBuilder){}
  reschedule(){
    let appointment_number = this.form.value.appointment_number;
    let name = this.form.value.name;
    let username = this.form.value.username;
    let email = this.form.value.email;
    if (appointment_number<=0){
      alert('Invalid appointment id');
    }
    alert('Appointment Rescheduled')
  }

}
