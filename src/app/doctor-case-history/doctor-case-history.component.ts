import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CASES } from "../app.component";

@Component({
  standalone: true,
  selector: 'app-doctor-case-history',
  templateUrl: './doctor-case-history.component.html',
  styleUrls: ['./doctor-case-history.component.css'],
  imports: [CommonModule]
})
export class DoctorCaseHistoryComponent {
  Cases: CASES[] = [];
  constructor(){}
}
