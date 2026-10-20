import { Routes } from '@angular/router';

import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { AppointmentListComponent } from'./appointment/appointment-list/appointment-list.component';

import { HospitalDetailComponent } from './hospital/hospital-detail/hospital-detail.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor/doctor-detail/doctor-detail.component';

export const routes: Routes = [
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'appointments', component: AppointmentListComponent },

  {path: 'hospitaldetail/detail/:id', component: HospitalDetailComponent},
  {path: 'patientdetail/detail/:id', component: PatientDetailComponent},
  {path: 'doctordetail/detail/:id', component: DoctorDetailComponent},

   {path: 'createshospital', component: HospitalListComponent},
   {path: 'createpatient', component: PatientListComponent},
   {path: 'createdoctor', component: DoctorListComponent}

];


