import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from "chart.js/auto";
import { LocationStrategy } from "@angular/common";
import { CASES, APPOINTMENTS } from "../app.component";

@Component({
  standalone: true,
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
  imports: [CommonModule]
})


export class DoctorDashboardComponent implements OnInit {
  Appointments: APPOINTMENTS[] = [];
  Cases: CASES[] = [];
  
  constructor(private platformLocation: LocationStrategy){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }
  
  ngOnInit(){
    var MyChart = new Chart('MyChart', {
      type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [{
        label: '# of Cases',
        data: [12, 19, 3, 5, 2, 3],
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
  }
}
