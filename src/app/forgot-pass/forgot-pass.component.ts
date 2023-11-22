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

  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirm_pass: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  redirect(){
    let username = this.form.value.username
    let password = this.form.value.password
    let confirm_pass = this.form.value.confirm_pass
    if (confirm_pass!=password)
    {
      alert('Password not matching')
    }
    this.router.navigate([''])
  }
}
