import { Injectable } from '@angular/core';
import { PATIENTS, EDIT_PATIENT, USER_LOGIN, BASE_RESPONSE, PATIENT_SIGNUP } from "../app.component";
import { HttpClient } from "@angular/common/http";
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

  public get_patient_by_id(id: Number): Observable<PATIENTS>{
    return this.http.get<PATIENTS>('localhost:8080/patients/'+id)
  }

  public patient_edit(details: EDIT_PATIENT): Observable<any>{
    return this.http.post<any>('localhost:8080/patients/edit', details)
  }
}
