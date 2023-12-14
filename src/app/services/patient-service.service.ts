import { Injectable } from '@angular/core';
import { PATIENTS, EDIT_PATIENT, USER_LOGIN, BASE_RESPONSE, PATIENT_SIGNUP } from "../app.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http: HttpClient) { }

  public login_patient(details: USER_LOGIN): Observable<BASE_RESPONSE> {
    return this.http.post<BASE_RESPONSE>('/patients/login', details)
  }
  
  public signup_patient(details: PATIENT_SIGNUP): Observable<BASE_RESPONSE>{
    return this.http.post<BASE_RESPONSE>('/patients/signup', details)
  }

  public get_patient_by_id(id: String): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.get<BASE_RESPONSE>('/patients/'+id, {headers})
  }

  public edit_details(details: EDIT_PATIENT): Observable<any>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/patients/edit', details, {headers})
  }
}
