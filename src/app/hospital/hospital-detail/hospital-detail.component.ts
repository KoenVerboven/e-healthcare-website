import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-hospital-detail',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './hospital-detail.component.html',
  styleUrl: './hospital-detail.component.css'
})
export class HospitalDetailComponent implements OnInit {

  isUpdating: boolean = false;
  disableControls: boolean = false;
  pageTitle:string = 'Hospital Detail';
  action: string = 'detail';
  errorMessage : string = "";
  hospitalId: number = 0;
  hospital: Hospital = {id:0, name:"", address:"", phoneNumber:"", email:""};
  
 constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private route: ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
        const id = result.get('hospitalid');
        const action = result.get('action');
        this.hospitalId = Number(id);
        if(action != null)
        {
          this.action = action;
        }
               
        if(id != "0"){
          this.hospitalService.getHospitalById(Number(id)).subscribe({
            next: result => this.hospital = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        if(this.action == 'create'){this.pageTitle = "Create hospital";}
        else if(this.action == "detail"){
          this.pageTitle = "Hospital detail";
          this.disableControls = true;
        }
        else if(this.action == "update"){
          this.pageTitle = "Update hospital ";
        }
    
     });
  }

onSubmit() {
    if(this.isUpdating){
      this.hospitalService.updateHospital(this.hospital)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/hospitals'])
        },
        error: (err) => {
          console.error(err);
          alert(`Error occured during update : ${err.status}`);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      this.hospitalService.createHospital(this.hospital)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/hospitals'])
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during insert : ${err.status}`;
        }
      });
    }
}
 
  updateClick() {
   this.action = "update";
   this.pageTitle = "Update doctor";
   this.disableControls = false;
  }
  
  navigateBack() {
    this.action = "update";
    this.pageTitle = "Update hospital";
    this.router.navigateByUrl('/hospitals');
  }

}
