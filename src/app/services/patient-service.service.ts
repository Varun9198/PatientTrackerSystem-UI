import { Injectable } from '@angular/core';
import { PATIENTS, EDIT_PATIENT } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http: HttpClient) { }

  public get_patient_by_id(id: Number): Observable<PATIENTS>{
    return this.http.get<PATIENTS>('localhost:8080/patients/'+id)
  }

  public patient_signup(details: PATIENTS): Observable<any>{
    return this.http.post<any>('localhost:8080/patients/signup', details)
  }

  public patient_edit(details: EDIT_PATIENT): Observable<any>{
    return this.http.post<any>('localhost:8080/patients/edit', details)
  }
}
