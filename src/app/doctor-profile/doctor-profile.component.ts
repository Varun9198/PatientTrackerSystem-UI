import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CASES, APPOINTMENTS } from "../app.component";


@Component({
  standalone: true,
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
  imports: [CommonModule]
})
export class DoctorProfileComponent {
  name ="James";
  dob = '1999-01-02';
  hospital = 'Rayson';
  speciality = 'Ped';
  address = 'Amherst College';
  phone_number = '123-456-7891';
  constructor(private router: Router){}
  edit(){
    this.router.navigate(['DoctorLogin/Edit']);
  }
}
