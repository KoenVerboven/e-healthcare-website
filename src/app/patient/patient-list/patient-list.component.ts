import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  PageTitle: string = 'Patient List';
  patients: Patient[] =[];
  patientsResultsCount = 0;
  loading = false;
  error = '';

   constructor(private patientService: PatientService, private router: Router){}

   ngOnInit(){
      this.getPatients();
    }
       
    getPatients()
    {
      this.loading = true;  
      this.patientService.getPatients().subscribe(patientsFromApi =>{
          this.patients = patientsFromApi;
          this.patientsResultsCount = this.patients.length;
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
          alert(error.message);
        }
      );
    }

    showPatientDetail(id: number): void {
      this.router.navigate(['/patientdetail/detail', id]) 
    }

    addPatient() {
      this.router.navigate(['/patientdetail/create',0]);
    }

}
