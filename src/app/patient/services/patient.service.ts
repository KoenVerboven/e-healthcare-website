import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import {Observable} from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = `${environment.apiUrl}/Patient`;

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

   getPatientById(id : number): Observable<Patient>{
      return this.http.get<Patient>(`${this.apiUrl}/getById/${id}`)
   }
  
   createPatient(patient    : Patient): Observable<Patient>{
      return this.http.post<Patient>(this.apiUrl,patient  );
   }
  
   deletePatient(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
   }
  
   updatePatient(patient: Patient):Observable<Patient>{
      return this.http.put<Patient>(`${this.apiUrl}/${patient.id}`,patient );
   }

   getPatienByFilter(lastname:string,firstname:string, sort:string, pagesize: number, pagenumber: number)
   {
    let params = new HttpParams();
      params = params.set('lastname',lastname);
      params = params.set('firstname',firstname);
      params = params.set('sort',sort);
      params = params.set('pagesize',pagesize);
      params = params.set('pagenumber',pagenumber);
      return this.http.get<Patient[]>(`${this.apiUrl}/getPatientByFilter`,{params: params});
   } 
 
}
