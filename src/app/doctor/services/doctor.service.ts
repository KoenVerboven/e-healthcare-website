import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import {Observable} from 'rxjs';
import {Doctor} from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = `${environment.apiUrl}/doctor`;

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  getDoctorById(id : number): Observable<Doctor>{
    return this.http.get<Doctor>(`${this.apiUrl}/getById/${id}`)
  }
  
  createDoctor(doctor : Doctor): Observable<Doctor>{
    return this.http.post<Doctor>(this.apiUrl,doctor    );
  }
  
  deleteDoctor(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  updateDoctor(doctor: Doctor):Observable<Doctor>{
    return this.http.put<Doctor>(`${this.apiUrl}/${doctor.id}`,doctor );
  }

   getDoctorFilter(lastname:string,firstname:string, sort:string, pagesize: number, pagenumber: number)
     {
      let params = new HttpParams();
        params = params.set('lastname',lastname);
        params = params.set('firstname',firstname);
        params = params.set('sort',sort);
        params = params.set('pagesize',pagesize);
        params = params.set('pagenumber',pagenumber);
        return this.http.get<Doctor[]>(`${this.apiUrl}/getDoctorByFilter`,{params: params});
     } 
}
