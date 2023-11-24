import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

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


  constructor(private fb: FormBuilder, private router: Router) {}

  get_otp(){
    let radio_element = document.getElementsByName("action")
    let username = 'doctor';
    for (let i =0; i<radio_element.length; i++){
      if ((<HTMLInputElement>radio_element[i]).checked){
        
        username = (<HTMLInputElement>radio_element[i]).value;
      }
    }
  }

  redirect(){
    let otp = this.form_password.value.OTP
    let password = this.form_password.value.password
    let confirm_pass = this.form_password.value.confirm_pass
    if (confirm_pass!=password)
    {
      alert('Password not matching')
    }
    alert('Password Successfully changed')
    this.router.navigate([''])
  }
}
