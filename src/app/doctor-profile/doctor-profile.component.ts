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
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
  imports: [CommonModule]
})
export class DoctorProfileComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}
}
