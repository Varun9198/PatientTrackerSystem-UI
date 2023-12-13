import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import {BASE_RESPONSE} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeService {

  constructor(private http: HttpClient) { }

  public get_otp(appendedEmail:String): Observable<BASE_RESPONSE>{
    let params = new HttpParams()
                .set('appendedEmail', appendedEmail.toString());
    return this.http.post<BASE_RESPONSE>('/reset-password/get-otp',{'appendedEmail': appendedEmail.toString()})
  }

  public change_password(user_type: String, username:String, otp: Number, password: String): Observable<BASE_RESPONSE>{
    let params = {
      'appendedEmail': user_type.toString() + ":" + username,
      'OTP': otp.toString(),
      'password': password.toString()
    }
    return this.http.post<any>('/reset-password/reset', params)
  }
}
