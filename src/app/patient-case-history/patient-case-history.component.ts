import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CASES } from "../app.component";


@Component({
  standalone: true,
  selector: 'app-doctor-case-history',
  templateUrl: './patient-case-history.component.html',
  styleUrls: ['./patient-case-history.component.css'],
  imports: [CommonModule]
})
export class PatientCaseHistoryComponent {
  Cases: CASES[] = [];
  constructor(){}
}
