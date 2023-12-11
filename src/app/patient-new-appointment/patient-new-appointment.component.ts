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
  selector: 'app-patient-new-appointment',
  templateUrl: './patient-new-appointment.component.html',
  styleUrls: ['./patient-new-appointment.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientNewAppointmentComponent {
  form: FormGroup = this.fb.group({
    doctor_id: ['', Validators.required]
  });

  form2: FormGroup = this.fb.group({
    speciality: [''],
    location: [''],
    name: ['']
  });
  Cases: CASES[] = UsersJson;
  constructor(private fb: FormBuilder, private router: Router){}

  filter(){

  }
  
  select_doctor(){
  this.router.navigate(['PatientLogin/NewAppointment/DoctorSelect']);
  }
}
