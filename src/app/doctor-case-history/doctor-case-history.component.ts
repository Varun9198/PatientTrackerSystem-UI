import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { CASES } from "../app.component";
import {CaseServiceService} from "../services/case-service.service";

@Component({
  standalone: true,
  selector: 'app-doctor-case-history',
  templateUrl: './doctor-case-history.component.html',
  styleUrls: ['./doctor-case-history.component.css'],
  imports: [CommonModule]
})
export class DoctorCaseHistoryComponent {
  Cases: CASES[] = [];
  constructor(private caseService: CaseServiceService){
  }

  ngOnInit(){
    const id = localStorage.getItem('user_id') ?? "-1"
    this.caseService.get_cases_for_user(id, 'doctor').subscribe(
      (response) => {
        console.log(response)
        this.Cases = response.body
      },
      (err) => {
        console.log('error is: ', err)
      }
    )
  }
}
