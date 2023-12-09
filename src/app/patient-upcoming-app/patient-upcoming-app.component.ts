import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import UsersJson from '../../assets/users.json'

interface CASES{
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  standalone: true,
  selector: 'app-doctor-upcoming-app',
  templateUrl: './doctor-upcoming-app.component.html',
  styleUrls: ['./doctor-upcoming-app.component.css'],
  imports: [CommonModule]
})
export class DoctorUpcomingAppComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}

}
