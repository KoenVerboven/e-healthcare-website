import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   private apiUrl = `${environment.apiUrl}/DoctorAppointment`;

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }
  
  getAppointmentById(id : number): Observable<Appointment>{
    return this.http.get<Appointment>(`${this.apiUrl}/getById/${id}`)
  }

  getDoctorAppointmentsByFilter(patientId?:number,doctorId?:number,startDate?: Date,endDate?: Date, sort?:string, pagesize?: number, pagenumber?    : number)
  {
    let params = new HttpParams();
    params = params.set('patientId',patientId?.toString() || '0');
    params = params.set('doctorId',doctorId?.toString() || '0');
    params = params.set('startDate',startDate?.toISOString() || new Date(0).toISOString());
    params = params.set('endDate',endDate?.toISOString() || new Date(0) .toISOString());
    params = params.set('sort',sort || 'default');
    params = params.set('pagesize',pagesize || 10);
    params = params.set('pagenumber',pagenumber || 1  );
    return this.http.get<Appointment[]>(`${this.apiUrl}/getDoctorAppointmentsByFilter`,{params: params});
  } 

  getDoctorAppointmentsByFilterCount(patientId?:number,doctorId?:number,startDate?: Date,endDate?: Date)
  {
    let params = new HttpParams();
    params = params.set('patientId',patientId?.toString() || '0');
    params = params.set('doctorId',doctorId?.toString() || '0');
    params = params.set('startDate',startDate?.toISOString() || new Date(0).toISOString());
    params = params.set('endDate',endDate?.toISOString() || new Date(0).toISOString());
    return this.http.get<number>(`${this.apiUrl}/getAppointmentsByFilterCount`,{params: params});
  }

}
