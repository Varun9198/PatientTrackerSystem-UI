import { Component, NgModule } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { CommonModule } from '@angular/common';

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
export class DoctorDashboardComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}
}
