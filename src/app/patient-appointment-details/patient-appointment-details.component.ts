import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {CASES, NEWCASE} from "../app.component";
import {CaseServiceService} from "../services/case-service.service";
import {AppointmentServiceService} from "../services/appointment-service.service";

@Component({
  standalone: true,
  selector: 'app-patient-appointment-details',
  templateUrl: './patient-appointment-details.component.html',
  styleUrls: ['./patient-appointment-details.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientAppointmentDetailsComponent implements OnInit{
  form: FormGroup = this.fb.group({
    case_id: [''],
    time: ['', Validators.required],
    date: ['', Validators.required],
  });
  Cases: CASES[] = [];
  ShowCases: Boolean = false;
  constructor(private fb: FormBuilder, private router: Router,
              private caseService: CaseServiceService, private appointmentService: AppointmentServiceService){}

  ngOnInit() {
    let patient_id = localStorage.getItem("user_id") ?? '-1'
    let doctor_id = localStorage.getItem("BookingTempDoctorID") ?? -1
    this.caseService.open_patient_doctor_cases(patient_id, doctor_id.toString()).subscribe(
      (response) => {
        if(response.body.length !== 0){
          this.Cases = response.body
          this.ShowCases = true
        }
      }
    )
  }

  bookCaseAndAppointment(){
    let time = this.form.value.time
    let date = this.form.value.date
    let patient_id = localStorage.getItem("user_id") ?? '-1'
    let doctor_id = localStorage.getItem("BookingTempDoctorID") ?? -1
    this.caseService.create_case(patient_id.toString(), doctor_id.toString()
      , date.toString(), time.toString()).subscribe(
      (response) => {
        alert(response.msg);
        this.router.navigateByUrl('PatientLogin/NewAppointment')
      }, (err) =>{
        alert("New case and appointment can't be created.")
        console.log("err is:", err)
      }
    )
  }

  bookAppointment(){
    let case_id = this.form.value.case_id
    let time = this.form.value.time
    let date = this.form.value.date


    if (case_id<=0 && this.ShowCases){
      alert('Invalid Case Id');
    }
    else{
      let patient_id = localStorage.getItem("user_id") ?? '-1'
      let doctor_id = localStorage.getItem("BookingTempDoctorID") ?? -1
      this.caseService.open_patient_doctor_cases(patient_id, doctor_id.toString()).subscribe(
        (response) => {
          if(response.body.length !== 0){
            let NewCase : NEWCASE = {
              caseId: case_id.toString(),
              patientId: patient_id.toString(),
              doctorId: doctor_id.toString(),
              date: date.toString(),
              time: time.toString()
            }
            this.appointmentService.new_appointment(NewCase).subscribe(
              (response) => {
                alert(response.msg);
                this.router.navigateByUrl('PatientLogin/NewAppointment')
              },
              (err) => {
                alert("New appointment can't be created.")
                console.log("err is:", err)
              }
            )
          }
          else{
            this.caseService.create_case(patient_id.toString(), doctor_id.toString()
            , date.toString(), time.toString()).subscribe(
              (response) => {
                alert(response.msg);
                this.router.navigateByUrl('PatientLogin/NewAppointment')
              }, (err) =>{
                alert("New case and appointment can't be created.")
                console.log("err is:", err)
              }
            )
          }
        }
      )
    }



  }
}
