import { Injectable } from '@angular/core';
import { DOCTORS, EDIT_DOCTOR, DOCTOR_SIGNUP, USER_LOGIN, BASE_RESPONSE } from "../app.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http: HttpClient) {
    this.http = http
  }

  public get_approved_doctors(): Observable<DOCTORS[]>{
    return this.http.get<DOCTORS[]>('localhost:8080/doctors')
  }

  public get_doctor_by_id(id: String): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.get<BASE_RESPONSE>('/doctors/'+id, {headers})
  }

  public login_doctor(details: USER_LOGIN): Observable<BASE_RESPONSE> {
    return this.http.post<BASE_RESPONSE>('/doctors/login', details)
  }

  public signup_doctor(details: DOCTOR_SIGNUP): Observable<BASE_RESPONSE> {
    return this.http.post<BASE_RESPONSE>('/doctors/signup', details)
    // // console.log(details)
    // let options = {
    //   headers: new HttpHeaders()
    //   .set("Content-Type", "application/json")
    // };
    // let id: string
    // this.http.post<any>('/doctors/signup', details, options)
    // .subscribe(data => {
    //   console.log(id);
    //   return data
    // });
  }

  public edit_details(details: EDIT_DOCTOR): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/doctors/edit', details, {headers})
  }
}
