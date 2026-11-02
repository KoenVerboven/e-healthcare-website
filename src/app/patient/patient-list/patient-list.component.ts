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
  patientsCount = 0;
  list: number[] = [];
  loading = false;
  error = '';
  message = '';
  patientSpecParams : PatientSpecParams = {lastName : '',firstName: '', sort:'', pageSize: 3, pageNumber: 0}

   constructor(private patientService: PatientService, private router: Router){}

   ngOnInit(){
        this.patientService.searchLastNameText.subscribe({
          next:(data) =>{
            this.patientSpecParams.lastName = data;
          }
    });
     this.patientService.searchFirstNameText.subscribe({
          next:(data) =>{
            this.patientSpecParams.firstName = data;
          }
    });
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
    
    getPatientsByFilter()
    {
      this.loading = true;
      if(this.patientSpecParams.lastName == '' && this.patientSpecParams.firstName == '')
      {
        this.patientsCount = 0;
        this.patients = [];
        this.list = [];
        this.patientSpecParams.pageNumber = 0;
        this.loading = false;
        this.message = 'Please enter a search criteria.';
        return;
      }

      this.patientService.getPatientByFilterCount(this.patientSpecParams.lastName,this.patientSpecParams.firstName).subscribe((data: number) => {
          this.patientsCount = data;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );
      this.patientSpecParams.pageNumber = 1;
      this.getPatientByFilter();
    }

    clearSearch() {
      this.patientService.searchLastNameText.next('');
      this.patientService.searchFirstNameText.next('');
      this.patientsCount = 0;
      this.patients = [];
      this.list = [];
      this.patientSpecParams.pageNumber = 0;
      this.message = '';
    }
    
    showPatientDetail(id: number): void {
      this.router.navigate(['/patientdetail/detail', id]) 
    }

    addPatient() {
      this.router.navigate(['/patientdetail/create',0]);
    }

    getPage(pageNumber: number)
    {
      this.patientSpecParams.pageNumber = pageNumber;
      this.getPatientByFilter();
    }
   
    getPrevPage() {
      if(this.patientSpecParams.pageNumber -1 < 1)
      {
        return;
      }
      this.patientSpecParams.pageNumber -= 1;
      this.getPatientByFilter();
    }

     getNextPage() {
       if(this.patientSpecParams.pageNumber +1 > this.list.length)
        {
          return;
        }
        this.patientSpecParams.pageNumber += 1;
        this.getPatientByFilter();
    }

    getPatientByFilter()
    {
      this.patientService.getPatienByFilter(this.patientSpecParams.lastName,this.patientSpecParams.firstName,'lastname', this.patientSpecParams.pageSize,this.patientSpecParams.pageNumber).subscribe((data: Patient[]) => {
              this.patients = data;
              this.list = new Array(Math.ceil(this.patientsCount/this.patientSpecParams.pageSize))
              console.log(this.list);
              this.loading = false;
              this.message = '';
            },
            error => {
              this.error = 'An error has occurred. Please try again later.';
              console.log(error.message);
              this.loading = false;
            }
        );
    }


}
