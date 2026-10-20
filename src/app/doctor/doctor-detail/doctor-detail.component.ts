import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service'


@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './doctor-detail.component.html',
  styleUrl: './doctor-detail.component.css'
})
export class DoctorDetailComponent implements OnInit {
  pageTitle: string |null = "";
  action: string = 'detail';
  isUpdating: boolean = false;
  disableControls: boolean = false;
  errorMessage : string = "";
  doctorId: number = 0;
  doctor: Doctor = {id:0, firstName:"", lastName:"",   address:"", phoneNumber:"", email:"", medicaltitle:0, specializationid:0, licenseNumber:"", licenseExpiryDate:new Date()};

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
     this.route.paramMap.subscribe(result => {
        const id = result.get('id');
       // const action = result.get('action');
        this.doctorId = Number(id);
               
        if(id){
          this.doctorService.getDoctorById(Number(id)).subscribe({
            next: result => this.doctor = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        if(this.action == 'create'){this.pageTitle = "Create doctor";}
        else if(this.action == "detail"){
          this.pageTitle = "Doctor detail";
          
          this.disableControls = true;
        }
        else if(this.action == "update"){
          this.pageTitle = "Update doctor";
        }
    
     });
  }

onSubmit() {
    if(this.isUpdating){
      this.doctorService.updateDoctor(this.doctor)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/doctors'])
        },
        error: (err) => {
          console.error(err);
          alert(`Error occured during update : ${err.status}`);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      this.doctorService.createDoctor(this.doctor)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/doctors'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
}


 navigateBack() {
   this.router.navigateByUrl('/doctors');
 }

 updateClick() {
   this.action = "update";
   this.pageTitle = "Update student";
   this.disableControls = false;
 }

}
