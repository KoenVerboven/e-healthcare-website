import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import {Observable} from 'rxjs';
import { Hospital } from '../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private apiUrl = `${environment.apiUrl}/hospital`; 

  constructor(private http: HttpClient) { }

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  getHospitalById(id : number): Observable<Hospital>{
    return this.http.get<Hospital>(`${this.apiUrl}/getById/${id}`)
  }

  createHospital(hospital : Hospital): Observable<Hospital>{
    return this.http.post<Hospital>(this.apiUrl,hospital);
  }

  deleteHospital(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateHospital(hospital: Hospital):Observable<Hospital>{
    return this.http.put<Hospital>(`${this.apiUrl}/${hospital.id}`,hospital );
  }

}
