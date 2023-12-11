import { Component } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';

interface CASES{
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  standalone: true,
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.component.html',
  styleUrls: ['./patient-appointment-details.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientAppointmentDetailsComponent {
  form: FormGroup = this.fb.group({
    case_id: ['', Validators.required],
    time: ['', Validators.required],
    date: ['', Validators.required],
  });
  Cases: CASES[] = UsersJson;
  constructor(private fb: FormBuilder, private router: Router){}

  book(){
    let case_id = this.form.value.case_id 
    let time = this.form.value.time
    let date = this.form.value.date

    alert('Appointment Successfully Booked')
    this.router.navigate(['PatientLogin/NewAppointment']);
  }
}
