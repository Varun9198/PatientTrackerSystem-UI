import { Component, OnInit } from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import { Router } from '@angular/router';


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
  ngOnInit(): void {
    
  }
  constructor(private router: Router){}

  edit(){
    this.router.navigate(['PatientLogin/Edit']);
  }
}
