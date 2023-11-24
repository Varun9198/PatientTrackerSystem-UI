import { Component } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface CASES{
  id: Number;
  name: String;
  username: String;
  email: String;
}

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
    new_time: ['', Validators.required]
  });
  Cases: CASES[] = UsersJson;
  constructor(private fb:FormBuilder){}
  reschedule(){
    let appointment_number = this.form.value.appointment_number;
    let new_time = this.form.value.new_time;
    if (appointment_number<=0){
      alert('Invalid appointment id');
    }
    alert('Appointment Rescheduled')
  }
}
