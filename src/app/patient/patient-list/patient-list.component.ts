import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Router, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientSpecParams } from '../models/patientSpecParams.model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  PageTitle: string = 'Patient List';
  patients: Patient[] =[];
  patientsCount = -1;
  list: number[] = [];
  loading = false;
  error = '';
  patientSpecParams : PatientSpecParams = {lastName : '',firstName: '', sort:'', pageSize: 3, pageNumber: 1}

   constructor(private patientService: PatientService, private router: Router){}

   ngOnInit(){
   }
       
    getAllPatients()
    {
      this.loading = true; 
      this.patientService.getPatients().subscribe(patientsFromApi =>{
          this.patients = patientsFromApi;
          this.patientsCount = this.patients.length;
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );
    }
    
    getStudentsByFilter()
    {
      this.loading = true;
  
      //this.patientService.get //todo
      //this.patientsCount = 8; //todo

      this.patientService.getPatientByFilterCount(this.patientSpecParams.lastName,this.patientSpecParams.firstName).subscribe((data: number) => {
          this.patientsCount = data;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );


      this.patientService.getPatienByFilter(this.patientSpecParams.lastName,this.patientSpecParams.firstName,'lastname', this.patientSpecParams.pageSize,this.patientSpecParams.pageNumber).subscribe((data: Patient[]) => {
           this.patients = data;
           this.loading = false;
           //this.patientsCount = this.patients.length;
           this.list = new Array(Math.ceil(this.patientsCount/this.patientSpecParams.pageSize))
        },
          error => {
            this.error = error.message;
            //this.error = 'An error has occurred. Please try again later.';
            console.log(error.message);
            this.loading = false;
        }
      );
    }

    clearSearch() {
       
    }
    
    showPatientDetail(id: number): void {
      this.router.navigate(['/patientdetail/detail', id]) 
    }

    addPatient() {
      this.router.navigate(['/patientdetail/create',0]);
    }

    showMedicalRecord() {
      this.router.navigate(['/medicalrecordswitchboard']) 
    }

    showAppointments() {
      throw new Error('Method not implemented.');
    }

    showInvoices() {
      throw new Error('Method not implemented.');
    }

    getPage(pageNumber: number)
    {
      this.patientSpecParams.pageNumber = pageNumber;
      this.patientService.getPatienByFilter(this.patientSpecParams.lastName,this.patientSpecParams.firstName,'lastname', this.patientSpecParams.pageSize,this.patientSpecParams.pageNumber).subscribe((data: Patient[]) => {
            this.patients = data;
            this.list = new Array(Math.ceil(this.patientsCount/this.patientSpecParams.pageSize))
            console.log(this.list);
            this.loading = false;
          },
          error => {
            this.error = 'An error has occurred. Please try again later.';
            console.log(error.message);
            this.loading = false;
          }
      );
  }
   
    getPrevPage() {
      if(this.patientSpecParams.pageNumber -1 < 1)
      {
        return;
      }

      this.patientSpecParams.pageNumber -= 1;
      this.patientService.getPatienByFilter(this.patientSpecParams.lastName,this.patientSpecParams.firstName,'lastname', this.patientSpecParams.pageSize,this.patientSpecParams.pageNumber).subscribe((data: Patient[]) => {
            this.patients = data;
            this.list = new Array(Math.ceil(this.patientsCount/this.patientSpecParams.pageSize))
            console.log(this.list);
            this.loading = false;
          },
          error => {
            this.error = 'An error has occurred. Please try again later.';
            console.log(error.message);
            this.loading = false;
          }
      );
    }

     getNextPage() {
       if(this.patientSpecParams.pageNumber +1 > this.list.length)
        {
          return;
        }

        this.patientSpecParams.pageNumber += 1;
        this.patientService.getPatienByFilter(this.patientSpecParams.lastName,this.patientSpecParams.firstName,'lastname', this.patientSpecParams.pageSize,this.patientSpecParams.pageNumber).subscribe((data: Patient[]) => {
              this.patients = data;
              this.list = new Array(Math.ceil(this.patientsCount/this.patientSpecParams.pageSize))
              console.log(this.list);
              this.loading = false;
            },
            error => {
              this.error = 'An error has occurred. Please try again later.';
              console.log(error.message);
              this.loading = false;
            }
        );
    }

}
