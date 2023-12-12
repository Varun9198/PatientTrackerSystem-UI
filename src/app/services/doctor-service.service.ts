import { Injectable } from '@angular/core';
import { DOCTORS, EDIT_DOCTOR, DOCTOR_SIGNUP } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http: HttpClient) { }

  public get_approved_doctors(): Observable<DOCTORS[]>{
    return this.http.get<DOCTORS[]>('localhost:8080/doctors')
  }

  public get_doctor_by_id(id: Number): Observable<DOCTORS>{
    return this.http.get<DOCTORS>('localhost:8080/doctors/'+id)
  }

  public signup_doctor(details: DOCTOR_SIGNUP): Observable<any>{
    return this.http.post<any>('localhost:8080/doctors/signup', details)
  }

  public edit_details(details: EDIT_DOCTOR){
    return this.http.post('localhost:8080/doctors/edit', details)
  }
}
