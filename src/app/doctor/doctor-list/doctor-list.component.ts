import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Router, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DoctorSpecParams } from '../models/doctorSpecParams.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule , MatProgressSpinnerModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent implements OnInit {
  PageTitle: string = 'Doctor List';
  doctors: Doctor[] =  [];
  doctorsCount = 0;
  loading = false;
  error = '';
  doctorSpecParams : DoctorSpecParams = {lastName : '',firstName: '', sort:'', pageSize: 10, pageNumber: 1}

  constructor(private doctorService: DoctorService, private router: Router){}
  
  ngOnInit(){
      this.getDoctors();
  }
  
   getDoctors()
   {
      this.loading = true;  
      this.doctorService.getDoctors().subscribe(doctorsFromApi =>{
          this.doctors = doctorsFromApi;
          this.doctorsCount = this.doctors.length;
          this.loading = false;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          this.loading = false;
        }
      );
    }

    getDoctorsByFilter()
    {
       this.loading = true;
       this.doctorService.getDoctorFilter(this.doctorSpecParams.lastName,this.doctorSpecParams.firstName,'lastname', 10,1).subscribe((data: Doctor[]) => {
           this.doctors = data;
           this.loading = false;
            this.doctorsCount = this.doctors.length;
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
      throw new Error('Method not implemented.');
    }

    showDoctorDetail(id: number): void {
      this.router.navigate(['/doctordetail/detail', id]) 
    }

  addDoctor() {
      this.router.navigate(['/doctordetail/create',0])
  }
 
}
