import { Component, OnInit } from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { PatientServiceService } from '../services/patient-service.service';
import { PATIENTS } from '../app.component';


@Component({
  standalone: true, 
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  imports: [CommonModule]
})
export class PatientProfileComponent implements OnInit{
  name: String = String('');
  dob: String = String('');
  height: String = String('');
  weight: String =  String('');
  address: String =  String('');
  phoneNumber: String =  String('');
  constructor(private patientService: PatientServiceService, private router: Router){}

  ngOnInit(): void {
    const id = localStorage.getItem('user_id') ?? "-1"

    this.patientService.get_patient_by_id(id).subscribe(
      (response) => {
        const patient: PATIENTS = response.body;
        this.name = patient.name;
        this.dob = patient.dob;
        this.address = patient.address;
        this.weight = patient.weight;
        this.height = patient.height;
        this.phoneNumber = patient.phoneNumber;
      }
    )
  }

  edit(){
    this.router.navigate(['PatientLogin/Edit']);
  }
}
