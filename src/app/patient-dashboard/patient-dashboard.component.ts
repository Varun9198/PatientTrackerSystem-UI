import { Component, NgModule, OnInit } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { CommonModule } from '@angular/common';
import { Chart } from "chart.js/auto";
import { LocationStrategy } from "@angular/common";

interface CASES{
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  standalone: true,
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  imports: [CommonModule]
})


export class PatientDashboardComponent implements OnInit {
  Cases: CASES[] = UsersJson;
  
  constructor(private platformLocation: LocationStrategy){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }
  
  ngOnInit(){
   
  }
}
