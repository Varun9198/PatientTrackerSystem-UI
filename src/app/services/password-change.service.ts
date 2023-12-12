import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordChangeService {

  constructor(private http: HttpClient) { }

  public get_otp(user_type: String, username:String): Observable<any>{
    let params = new HttpParams()
                .set('user_type', user_type.toString())
                .set('username', username.toString());
    return this.http.post<any>('localhost:8080/reset-password/get-otp',{params: params})
  }

  public change_password(user_type: String, username:String, otp: Number, password: String): Observable<any>{
    let params = new HttpParams()
                .set('user_type', user_type.toString())
                .set('username', username.toString())
                .set('OTP', otp.toString())
                .set('password', password.toString());
    return this.http.post<any>('localhost:8080/reset-password/reset',{params: params})
  }
}
