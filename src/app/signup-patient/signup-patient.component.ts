import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css']
})
export class SignupPatientComponent {
  constructor(private router: Router){}
  signup(){
    alert('Account Created');
    this.router.navigateByUrl('PatientLogin')
  }

}
