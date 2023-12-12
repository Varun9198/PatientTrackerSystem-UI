import { Injectable } from '@angular/core';
import { APPOINTMENTS, RESCHEDULE, NEWCASE } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http: HttpClient) { }

  public view_today(): Observable<APPOINTMENTS[]>{
    return this.http.get<APPOINTMENTS[]>('localhost:8080/appointments/view-today')
  }

  public view_future(): Observable<APPOINTMENTS[]>{
    return this.http.get<APPOINTMENTS[]>('localhost:8080/appointments/view-future')
  }

  public reschedule(details: RESCHEDULE): Observable<any>{
    return this.http.post<any>('localhost:8080/appointments/reschedule', details)
  }

  public new_appointment(details:NEWCASE): Observable<any>{
    return this.http.post<any>('localhost:8080/appointments/create-in-open-case', details)
  }
}
