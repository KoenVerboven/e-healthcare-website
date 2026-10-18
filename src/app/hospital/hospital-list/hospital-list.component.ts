import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital.model';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../services/hospital.service';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hospital-list.component.html',
  styleUrl: './hospital-list.component.css'
})
export class HospitalListComponent implements OnInit {
  PageTitle: string = 'Hospital List';
  hospitalsCount = 0;
  loading = false;
  error = '';
  hospitals: Hospital[] = [];

  ngOnInit(): void {
    this.getHospitals();
  }

  constructor(private hospitalService : HospitalService, private router: Router){}
  
  getHospitals():void{
    this.loading = true;
    this.hospitalService.getHospitals().subscribe(hospitalsFromApi => {
        this.hospitals = hospitalsFromApi;
        this.hospitalsCount = this.hospitals.length;
      },
      error => {
        this.error = 'An error has occurred. Please try again later.';
        console.log(error.message);
        alert(error.message);
      }
    ) 
  }

  showHospitalDetail(id: number): void {
      this.router.navigate(['/hospitaldetail/detail', id]) 
  }

}
