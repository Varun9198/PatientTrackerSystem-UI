import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APPOINTMENTS } from "../app.component";

@Component({
  standalone: true,
  selector: 'app-doctor-upcoming-app',
  templateUrl: './doctor-upcoming-app.component.html',
  styleUrls: ['./doctor-upcoming-app.component.css'],
  imports: [CommonModule]
})
export class DoctorUpcomingAppComponent {
  Cases: APPOINTMENTS[] = [];
  constructor(){}

}
