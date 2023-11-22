import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css']
})
export class SignupDoctorComponent {
  constructor(private router: Router){}
  signup(){
    alert('Account Created');
    this.router.navigateByUrl('DoctorLogin')
  }
}
