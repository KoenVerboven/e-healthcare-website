import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
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
export class AppointmentDetailComponent {
   pageTitle: string = 'Appointment Detail';
   action: string = 'Add';
   selectedDate: Date | null = null;
  
  updateClick() {
    throw new Error('Method not implemented.');
  }
  navigateBack() {
    throw new Error('Method not implemented.');
  }
 
}
