import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppointmentTimeListComponent } from './appointment-time/appointment-time-list/appointment-time-list.component';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, CommonModule, MatCardModule, AppointmentTimeListComponent],
  templateUrl: './appointment-detail.component.html',
  styleUrl: './appointment-detail.component.css'
})
export class AppointmentDetailComponent implements OnInit {
   pageTitle: string = 'Appointment Detail';
   action: string = '';
   selectedDate: Date | null = null;
   selectedPatient: string = 'Victor Verboven';
   selectedDoctor: string = 'Prof. Dr. Ir. Joris De Schutter';
   selectedPlace: string = 'Clinic A - Room 1';

   constructor(
     private router: Router,
     private route: ActivatedRoute,
   ){}

   ngOnInit() {
    this.route.paramMap.subscribe(result => {
      const action = result.get('action');
      this.action = action != null ? action : '';
      if(this.action == 'create'){
        this.pageTitle = "Create new appointment";
      }
      else if(this.action == "detail"){
        this.pageTitle = "Appointment detail";
      }
     });
   
   }
  
  updateClick() {
    throw new Error('Method not implemented.');
  }
  navigateBack() {
    throw new Error('Method not implemented.');
  }
 
}
