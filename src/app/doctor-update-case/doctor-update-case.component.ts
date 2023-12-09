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
  selector: 'app-doctor-update-case',
  templateUrl: './doctor-update-case.component.html',
  styleUrls: ['./doctor-update-case.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DoctorUpdateCaseComponent {
  form:FormGroup = this.fb.group({
    appointment_number: ['', Validators.required],
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required]
  });
  Cases: CASES[] = UsersJson;
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
