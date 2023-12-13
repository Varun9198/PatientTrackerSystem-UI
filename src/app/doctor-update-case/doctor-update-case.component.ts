import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CASES } from "../app.component";


@Component({
  standalone: true,
  selector: 'app-doctor-update-case',
  templateUrl: './doctor-update-case.component.html',
  styleUrls: ['./doctor-update-case.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DoctorUpdateCaseComponent {
  form_id: FormGroup = this.fb.group({
    case_id: ['', Validators.required],
  });
  form:FormGroup = this.fb.group({
    symptoms: ['', Validators.required],
    medicines: ['', Validators.required],
    cost: ['', Validators.required]
  });
  Cases: CASES[] = [];
  constructor(private fb:FormBuilder){}
  reschedule(){
    let id = this.form_id.value.case_id;
    let symptoms = this.form.value.symptoms;
    let medicines = this.form.value.medicines;
    let cost = this.form.value.cost;
    if (id<=0){
      alert('Invalid appointment id');
    }
    alert('Appointment Rescheduled')
  }

  closeCase(){
    let current_date = new Date();
    const year = current_date.getFullYear();
    const month = current_date.getMonth()+1;
    const day = current_date.getDate();
    const formatted_date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

}
