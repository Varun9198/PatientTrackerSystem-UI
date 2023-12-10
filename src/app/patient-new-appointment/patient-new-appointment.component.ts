import { Component } from '@angular/core';
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
  selector: 'app-patient-new-appointment',
  templateUrl: './patient-new-appointment.component.html',
  styleUrls: ['./patient-new-appointment.component.css'],
  imports: [CommonModule]
})
export class PatientNewAppointmentComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}
}
