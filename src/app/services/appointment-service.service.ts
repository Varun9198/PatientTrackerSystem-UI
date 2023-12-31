import { Injectable } from '@angular/core';
import { APPOINTMENTS, RESCHEDULE, NEWCASE, BASE_RESPONSE } from "../app.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(private http: HttpClient) { }

  public view_today(id: String, userType: String): Observable<BASE_RESPONSE>{

    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);

    return this.http.post<BASE_RESPONSE>('/appointments/view-today', {'id': id, 'userType': userType}, { headers })
  }

  public view_future(id: String, userType: String): Observable<BASE_RESPONSE> {
    let body = {'id': id, 'userType': userType}
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/appointments/view-future', body, { headers })
  }

  public reschedule(details: RESCHEDULE): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/appointments/reschedule', details, {headers})
  }

  public new_appointment(details:NEWCASE): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let headers = new HttpHeaders().set('Authorization', bearerToken);
    return this.http.post<BASE_RESPONSE>('/appointments/create-in-open-case', details, {headers})
  }
}
