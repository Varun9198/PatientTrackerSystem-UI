import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class PatientEditComponent implements OnInit{

  form:FormGroup = this.fb.group({
    weight: ['', Validators.required],
    height: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    
  }

  submit(){
    this.router.navigateByUrl('PatientLogin/Profile')

  }

}
