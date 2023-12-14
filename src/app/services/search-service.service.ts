import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_RESPONSE} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  public get_doctor_by_search(speciality: String, location: String, name: String): Observable<BASE_RESPONSE>{
    const bearerToken = localStorage.getItem("bearer_token") ?? '';
    let hHeaders = new HttpHeaders().set('Authorization', bearerToken);
    let hParams = new HttpParams();
    hParams = hParams.append('speciality', speciality.toString());
    hParams = hParams.append('name', name.toString());
    hParams = hParams.append('location', location.toString())
    return this.http.get<BASE_RESPONSE>('/doctors/findMatchByAll', {headers:hHeaders, params:hParams});
  }
}
