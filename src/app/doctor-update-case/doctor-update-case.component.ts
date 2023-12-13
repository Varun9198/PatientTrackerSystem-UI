import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CASES, UPDATE_CASE } from "../app.component";
import {CaseServiceService} from "../services/case-service.service";


@Component({
  standalone: true,
  selector: 'app-doctor-update-case',
  templateUrl: './doctor-update-case.component.html',
  styleUrls: ['./doctor-update-case.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DoctorUpdateCaseComponent implements OnInit{
  form_id: FormGroup = this.fb.group({
    case_id: ['', Validators.required],
  });
  form:FormGroup = this.fb.group({
    symptoms: ['', Validators.required],
    medicines: ['', Validators.required],
    cost: ['', Validators.required]
  });
  Cases: CASES[] = [];
  constructor(private fb:FormBuilder, private caseService: CaseServiceService){}
  edit(){
    let new_details: UPDATE_CASE = {
      caseId: this.form_id.value.case_id,
      symptoms: this.form.value.symptoms,
      medicines: this.form.value.medicines,
      cost: this.form.value.cost
    }
    if (new_details.caseId<=0){
      alert('Invalid appointment id');
    }
    else {
      this.caseService.update_case(new_details).subscribe(
        (response) => {
          if (response.msg == "Success!") {
            alert(response.msg)
            this.ngOnInit()
          }
          else{
            alert(response.msg)
          }
        },
        (err) => {
          alert('Something went wrong!')
          console.log('error is: ', err)
        }
      )
    }
  }

  ngOnInit(){

    const id = localStorage.getItem('user_id') ?? "-1"

    this.caseService.get_cases_for_user(id, 'doctor').subscribe(
      (response) => {
        this.Cases = response.body

        const filteredCases = this.Cases.filter((item) => {
          return item.closeDate === null || item.closeDate.trim() === '';
        });

        this.Cases = filteredCases
      },
      (err) => {
        console.log('error is: ', err)
      }
    )
  }
  closeCase(){
    const doctor_id = localStorage.getItem('user_id') ?? "-1"
    let caseId = this.form_id.value.case_id;
    this.caseService.close_case(caseId, doctor_id).subscribe(
      (response) =>{
        if (response.msg == "Case successfully closed!"){
          alert(response.msg)
          this.ngOnInit()
        }
        else{
          alert(response.msg)
          this.ngOnInit()
        }
      }, (err) => {
        alert("Something went wrong!")
        console.log("error is: ", err)
      }
    )

  }

}
