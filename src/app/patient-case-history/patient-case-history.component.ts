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
  templateUrl: './patient-case-history.component.html',
  styleUrls: ['./patient-case-history.component.css'],
  imports: [CommonModule]
})
export class PatientCaseHistoryComponent {
  Cases: CASES[] = UsersJson;
  constructor(){}
}
