import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {PasswordChangeService} from "../services/password-change.service";

@Component({
  standalone: true,
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
  imports: [ReactiveFormsModule]
})
export class ForgotPassComponent {

  form_otp:FormGroup = this.fb.group({
    username: ['', Validators.required],
  });

  form_password:FormGroup = this.fb.group({
    OTP: ['', Validators.required],
    password: ['', Validators.required],
    confirm_pass: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private router: Router, private passwordService: PasswordChangeService) {}

  get_otp(){
    let radio_element = document.getElementsByName("action")
    let userType = 'doctor';
    for (let i =0; i<radio_element.length; i++){
      if ((<HTMLInputElement>radio_element[i]).checked){
        userType = (<HTMLInputElement>radio_element[i]).value;
      }
    }

    let userName:string = this.form_otp.value.username
    this.passwordService.get_otp(userType + ":" + userName).subscribe(
      (response) => {
        if (response.msg == "Success!") {
          alert("OTP generated.")
        }
      },
      (err) => {
        console.log("err is: ", err)
      }
    )
  }

  redirect(){

    let radio_element = document.getElementsByName("action")
    let userType = 'doctor';
    for (let i =0; i<radio_element.length; i++){
      if ((<HTMLInputElement>radio_element[i]).checked){
        userType = (<HTMLInputElement>radio_element[i]).value;
      }
    }

    let userName:string = this.form_otp.value.username
    let otp = this.form_password.value.OTP
    let password = this.form_password.value.password
    let confirm_pass = this.form_password.value.confirm_pass
    if (confirm_pass!=password)
    {
      alert('Password not matching')
    }

    this.passwordService.change_password(userType, userName, otp, password).subscribe(
      (response) => {
        if (response.msg == "Success!") {
          alert('Password Successfully changed')
          this.router.navigate([''])
        }
      },
      (err) => {
        console.log("err is: ", err)
      }
    )

  }
}
