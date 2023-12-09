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
  selector: 'app-doctor-case-history',
  templateUrl: './doctor-case-history.component.html',
  styleUrls: ['./doctor-case-history.component.css'],
  imports: [CommonModule]
})
export class DoctorCaseHistoryComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}
}
