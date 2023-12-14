import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from "chart.js/auto";
import { LocationStrategy } from "@angular/common";
import { CASES, APPOINTMENTS } from "../app.component";
import { AppointmentServiceService } from '../services/appointment-service.service';
import { CaseServiceService } from '../services/case-service.service';
import { filter } from 'rxjs';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})


export class DoctorDashboardComponent implements OnInit {
  Appointments: APPOINTMENTS[] = [];
  Cases: CASES[] = [];
  labels: String[] = [];
  data: Number[] = [];
  year: Number = 2021;
  MyChart: Chart<"line", Number[], String> | null = null;

  form: FormGroup = this.fb.group({
    year_id: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private platformLocation: LocationStrategy, private appointmentService: AppointmentServiceService, private caseService: CaseServiceService){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }

  ngOnInit(){

    const id = localStorage.getItem('user_id') ?? "-1"

    this.appointmentService.view_today(id, "doctor").subscribe(
      (response) => {
        this.Appointments = response.body
        console.log(response)
      },
      (err) => {
        console.log('error is: ', err)
      }
    )

    this.caseService.get_cases_for_user(id, 'doctor').subscribe(
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

  visualize(){

    const id = localStorage.getItem('user_id') ?? "-1"
    this.year = this.form.value.year_id
    this.caseService.get_monthly_cases(id, this.year).subscribe(
      (response) => {
        var body = response.body
        this.labels = Object.keys(body)
        this.data = Object.values(body)//this.labels.map(key => body.key)
        console.log('this: ', response, this.data, this.labels)

        if(this.MyChart){
          this.MyChart.clear();
          this.MyChart.destroy();
        }
        this.MyChart = new Chart('MyChart', {
          type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            label: '# of Cases',
            data: this.data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      },
      (err) => {
        console.log('error is: ', err)
      }
    )

  }


}
