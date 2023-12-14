import { Component } from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {APPOINTMENTS, EDIT_DOCTOR, RESCHEDULE} from "../app.component";
import {AppointmentServiceService} from "../services/appointment-service.service";
import {Router} from "@angular/router";


@Component({
  standalone: true,
  selector: 'app-doctor-reschedule',
  templateUrl: './doctor-reschedule.component.html',
  styleUrls: ['./doctor-reschedule.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})

export class DoctorRescheduleComponent {
  form:FormGroup = this.fb.group({
    appointment_number: ['', Validators.required],
    new_time: ['', Validators.required],
    new_date: ['', Validators.required]
  });
  Appointments: APPOINTMENTS[] = [];
  constructor(private fb:FormBuilder, private platformLocation: LocationStrategy,
              private appointmentService: AppointmentServiceService, private router: Router){
    console.log(location.href);
    history.pushState(null, '', location.href);
    this.platformLocation.onPopState(() => {
      history.pushState(null, '', location.href)
    });
  }

  ngOnInit() {
    const id = localStorage.getItem('user_id') ?? "-1"
    this.appointmentService.view_future(id, 'doctor').subscribe(
      (response) => {
        this.Appointments = response.body
      }
    )
  }
  reschedule(){
    let appointment_number = this.form.value.appointment_number;
    if (appointment_number<=0){
      alert('Invalid appointment id');
    }
    const id = localStorage.getItem('user_id') ?? "-1"
    let rescheduleInstance: RESCHEDULE = {
      appointmentId: appointment_number,
      newDate:  this.form.value.new_date,
      newTime: this.form.value.new_time
    };
    this.appointmentService.reschedule(rescheduleInstance).subscribe(
      (response) =>{
          console.log(response)
          if (response.msg == "Requested appointment was successfully scheduled!"){
            alert('Appointment Rescheduled!');
          }
          else{
            alert(response.msg)
          }
        this.ngOnInit()
        },
        (err) => {
          alert('Error rescheduling the appointment')
          this.ngOnInit()
        }

    )
  }
}
