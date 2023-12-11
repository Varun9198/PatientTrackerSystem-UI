import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PatientTrackerSystem-UI';
}

export interface DOCTORS{
  id: Number;
  name: String;
  dob: String;
  hospital: String;
  speciality: String;
  address: String;
  phone_number: String;
  email: String;
}

export interface PATIENTS{
  id: Number;
  name: String;
  dob: String;
  sex: String;
  height: Number;
  weight: Number;
  address: String;
  phone_number: String;
  email: String;
}

export interface CASES{
  id: Number;
  patient_id: Number;
  doctor_id: Number;
  open_date: String;
  close_date: String;
  symptoms: String; 
  medicines: String; 
  cost: Number;
}

export interface APPOINTMENTS{
  appointment_id: Number;
  case_id: Number;
  patient_id: Number;
  doctor_id: Number;
  date: String;
  time: String;
}
