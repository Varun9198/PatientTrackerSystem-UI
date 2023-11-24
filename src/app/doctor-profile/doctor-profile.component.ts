import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import UsersJson from '../../assets/users.json'
import { Router } from '@angular/router';

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
  name ="James";
  dob = '1999-01-02';
  hospital = 'Rayson';
  speciality = 'Ped';
  address = 'Amherst College';
  phone_number = '123-456-7891';
  constructor(private router: Router){}
  edit(){
    this.router.navigate(['DoctorLogin']);
  }
}
