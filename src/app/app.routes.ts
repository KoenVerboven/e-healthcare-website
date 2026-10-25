import { Routes } from '@angular/router';

import { MedicalrecordSwitchboardComponent } from './patient/medicalrecord/medicalrecord-switchboard/medicalrecord-switchboard.component';

import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { AppointmentListComponent } from'./appointment/appointment-list/appointment-list.component';

import { HospitalDetailComponent } from './hospital/hospital-detail/hospital-detail.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { DoctorDetailComponent } from './doctor/doctor-detail/doctor-detail.component';
import { AppointmentDetailComponent } from './appointment/appointment-detail/appointment-detail.component';

export const routes: Routes = [
  { path : 'medicalrecordswitchboard', component: MedicalrecordSwitchboardComponent},
 
  { path: 'hospitals', component: HospitalListComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'appointments', component: AppointmentListComponent },

  {path: 'hospitaldetail/:action/:hospitalid', component: HospitalDetailComponent},
  {path: 'patientdetail/:action/:patientid', component: PatientDetailComponent},
  {path: 'doctordetail/:action/:doctorid', component: DoctorDetailComponent},
  {path: 'appointmentdetal/:action/appointmentid', component: AppointmentDetailComponent}

];


