import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from "chart.js/auto";
import { LocationStrategy } from "@angular/common";
import { APPOINTMENTS, CASES } from "../app.component";
import { AppointmentServiceService } from '../services/appointment-service.service';
import { CaseServiceService } from '../services/case-service.service';

@Component({
  standalone: true,
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  imports: [CommonModule]
})


export class PatientDashboardComponent implements OnInit {
  Appointments: APPOINTMENTS[] = [];
  Cases: CASES[] = [];
  
  constructor(private platformLocation: LocationStrategy, private appointmentService: AppointmentServiceService, private caseService: CaseServiceService){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }
  
  ngOnInit(){
    const id = localStorage.getItem('user_id') ?? "-1"

    this.appointmentService.view_today(id, "patient").subscribe(
      (response) => {
        this.Appointments = response.body
        console.log(response)
      },
      (err) => {
        console.log('error is: ', err)
      }
    )

    this.caseService.get_cases_for_user(id, 'patient').subscribe(
      (response) => {
        this.Cases = response.body

        const filteredCases = this.Cases.filter((item) => {
          return item.closeDate === null || item.closeDate.trim() === '';
        });

        this.Cases = filteredCases
      },
      (err) => {
        console.log('error is: ', err)
      }
    )
  }
}
