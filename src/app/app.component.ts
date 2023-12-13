import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PatientTrackerSystem-UI';
}

export interface USER_LOGIN {
  appendedUsername: String,
  password: String
}

export interface DOCTOR_SIGNUP{
  appendedEmail: String,
  dob: String,
  hospital: String,
  speciality: String,
  address: String,
  phoneNumber: String,
  name: String,
  password: String
}

export interface PATIENT_SIGNUP{
  appendedEmail: String,
  dob: String,
  height: String,
  weight: String,
  address: String,
  phoneNumber: String,
  name: String,
  password: String
}

export interface BASE_RESPONSE {
  status: String,
  msg: String,
  body: any
}

export interface DOCTORS{
  id: Number;
  name: String;
  dob: String;
  hospital: String;
  speciality: String;
  address: String;
  phoneNumber: String;
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
  caseId: Number;
  patientId: Number;
  doctorId: Number;
  openDate: String;
  closeDate: String;
  symptoms: String;
  medicines: String;
  cost: Number;
}

export interface APPOINTMENTS{
  appointmentId: Number;
  caseId: Number;
  patientId: Number;
  doctorId: Number;
  date: String;
  time: String;
}

export interface EDIT_DOCTOR{
  doctorId: String;
  hospital: String;
  speciality: String;
  address: String;
  phoneNumber: String;
}

export interface EDIT_PATIENT{
  patient_id: Number;
  height: Number;
  weight: Number;
  address: String;
  phone_number: String;
}

export interface RESCHEDULE{
  appointment_id: Number;
  newDate: String;
  newTime: String;
}

export interface NEWCASE{
  case_id: Number;
  patient_id: Number;
  doctor_id: Number;
  date: String;
  time: String;
}

export interface UPDATE_CASE{
  case_id: Number;
  symptoms: String;
  medicines: String;
  cost: Number;
}
