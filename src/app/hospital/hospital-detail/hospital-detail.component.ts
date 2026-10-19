import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service'

@Component({
  selector: 'app-hospital-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hospital-detail.component.html',
  styleUrl: './hospital-detail.component.css'
})
export class HospitalDetailComponent implements OnInit {
  formAction: string = 'detail';
  isUpdating: boolean = false;
  disableControls: boolean = false;
  pageTitle:string = 'Hospital Detail';
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
        const id = result.get('id');
        const action = result.get('action');
        this.hospitalId = Number(id);
               
        if(id){
          this.hospitalService.getHospitalById(Number(id)).subscribe({
            next: result => this.hospital = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        if(action == null){this.pageTitle = "Create hospital";}
        else if(action == "detail"){
          this.pageTitle = "Hospital detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){
          this.pageTitle = "Update hospital ";
        }
    
     });
  }
 
  updateClick() {
    throw new Error('Method not implemented.');
  }
  
  navigateBack() {
    this.router.navigateByUrl('/hospitals');
  }

}
