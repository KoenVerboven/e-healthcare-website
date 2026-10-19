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
  formAction: string = 'detail';
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
        const action = result.get('action');
        this.patientId = Number(id);
               
        if(id){
          this.patientService.getPatientById(Number(id)).subscribe({
            next: result => this.patient = result,
            error: err => this.errorMessage = `Error : (${err.status})`
          });
          this.isUpdating = true;
        }

        if(action == null){this.pageTitle = "Create patient";}
        else if(action == "detail"){
          this.pageTitle = "Patient detail";
          this.formAction = "detail";
          this.disableControls = true;
        }
        else if(action == "update"){
          this.pageTitle = "Update patient";
        }
    
     });
  }

  updateClick() {
    throw new Error('Method not implemented.');
  }

  navigateBack() {
    this.router.navigateByUrl('/patients');
  }

}
