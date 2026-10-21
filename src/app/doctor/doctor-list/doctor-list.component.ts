import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent implements OnInit {
  PageTitle: string = 'Doctor List';
  doctors: Doctor[] =  [];
  doctorsResultsCount = 0;
  loading = false;
  error = '';

  constructor(private doctorService: DoctorService, private router: Router){}
  
  ngOnInit(){
      this.getDoctors();
  }
  
   getDoctors()
   {
      this.loading = true;  
      this.doctorService.getDoctors().subscribe(doctorsFromApi =>{
          this.doctors = doctorsFromApi;
          this.doctorsResultsCount = this.doctors.length;
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

    showDoctorDetail(id: number): void {
      this.router.navigate(['/doctordetail/detail', id]) 
    }

  addDoctor() {
      this.router.navigate(['/doctordetail/create',0])
  }
 
}
