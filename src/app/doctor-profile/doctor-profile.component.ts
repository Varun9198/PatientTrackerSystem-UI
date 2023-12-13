import {CommonModule, LocationStrategy} from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOCTORS} from "../app.component";
import {DoctorServiceService} from "../services/doctor-service.service";


@Component({
  standalone: true,
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
  imports: [CommonModule]
})
export class DoctorProfileComponent {
  name: String = String('');
  dob: String = String('');
  hospital: String = String('');
  speciality: String =  String('');
  address: String =  String('');
  phoneNumber: String =  String('');
  constructor(private platformLocation: LocationStrategy, private doctorService: DoctorServiceService, private router: Router){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }
  ngOnInit() {

    const id = localStorage.getItem('user_id') ?? "-1"

    this.doctorService.get_doctor_by_id(id).subscribe(
      (response) => {
        const doctor: DOCTORS = response.body;
        this.name = doctor.name;
        this.dob = doctor.dob;
        this.address = doctor.address;
        this.hospital = doctor.hospital;
        this.speciality = doctor.speciality;
        this.phoneNumber = doctor.phoneNumber;
      }
    )
  }
  edit(){
    this.router.navigate(['DoctorLogin/Edit']);
  }
}
