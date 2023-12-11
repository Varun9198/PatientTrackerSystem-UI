import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import UsersJson from '../../assets/users.json'
import { APPOINTMENTS } from "../app.component";

@Component({
  standalone: true,
  selector: 'app-patient-upcoming-app',
  templateUrl: './patient-upcoming-app.component.html',
  styleUrls: ['./patient-upcoming-app.component.css'],
  imports: [CommonModule]
})
export class PatientUpcomingAppComponent {
  Cases: APPOINTMENTS[] = [];
  constructor(){}

}
