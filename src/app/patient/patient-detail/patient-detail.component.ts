import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service'

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.css'
})
export class PatientDetailComponent implements OnInit {
  pageTitle: string = 'Patient Detail';
  action: string = 'detail';
  isUpdating: boolean = false;
  disableControls: boolean = false;
  errorMessage : string = "";
  patientId: number = 0;
  patient: Patient = {id:0, firstName:"", lastName:"", dateOfBirth:new Date(), gender:"", address:"", phoneNumber:"", email:"",insuranceNumber:"", insuranceProvider:"", insuranceExpiryDate:new Date(), emergencyContactName:"", emergencyContactPhoneNumber:"", emergencyContactDescription:""};

   constructor(
      private patientService: PatientService,
      private router: Router,
      private route: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
        const id = result.get('id');
       // const action = result.get('action');
        this.patientId = Number(id);
               
        if(id){
          this.patientService.getPatientById(Number(id)).subscribe({
            next: result => this.patient = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        if(this.action == null){this.pageTitle = "Create patient";}
        else if(this.action == "detail"){
  
          this.disableControls = true;
        }
        else if(this.action == "update"){
          this.pageTitle = "Update patient";
        }
    
     });
  }

  onSubmit() {
     if(this.isUpdating){
      this.patientService.updatePatient(this.patient)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/patients'])
        },
        error: (err) => {
          console.error(err);
          alert(`Error occured during update : ${err.status}`);
          this.errorMessage = `Error occured during update : ${err.status}`;
        }
      });
    }
    else{
      this.patientService.createPatient(this.patient)
      .subscribe({ 
        next: (response) =>{
          this.router.navigate(['/patients'])
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
    this.pageTitle = "Update patient";
    this.disableControls = false;
  }

  navigateBack() {
    this.router.navigateByUrl('/patients');
  }

}
