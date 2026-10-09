import { Routes } from '@angular/router';
import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

export const routes: Routes = [
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'appointments', component: AppointmentListComponent }
];


