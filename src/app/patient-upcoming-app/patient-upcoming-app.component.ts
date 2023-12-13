import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from "../app.component";
import {AppointmentServiceService} from "../services/appointment-service.service";

@Component({
  standalone: true,
  selector: 'app-patient-upcoming-app',
  templateUrl: './patient-upcoming-app.component.html',
  styleUrls: ['./patient-upcoming-app.component.css'],
  imports: [CommonModule]
})
export class PatientUpcomingAppComponent implements OnInit{
  Appointments: APPOINTMENTS[] = [];
  constructor(private appointmentService: AppointmentServiceService){}

  ngOnInit(){
    const id = localStorage.getItem('user_id') ?? "-1"
    this.appointmentService.view_future(id, 'patient').subscribe(
      (response) => {
        this.Appointments = response.body
      },
      (err) => {
        console.log('error is: ', err)
      }
    )
}
}
