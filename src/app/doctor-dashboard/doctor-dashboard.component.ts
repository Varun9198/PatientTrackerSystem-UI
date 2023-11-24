import { Component, NgModule, OnInit } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { CommonModule } from '@angular/common';
import { Chart } from "chart.js/auto";

interface CASES{
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  standalone: true,
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
  imports: [CommonModule]
})


export class DoctorDashboardComponent implements OnInit {
  Cases: CASES[] = UsersJson;
  
  constructor(){
  }
  
  ngOnInit(){
    var MyChart = new Chart('MyChart', {
      type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
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
