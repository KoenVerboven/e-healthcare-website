import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppointmentSpecParams } from '../models/appointmentSpecParams.models';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  PageTitle: string = 'Appointment List';
  appointments: Appointment[] =[];
  appointmentCount = 0;
  list: number[] = [];
  loading = false;
  error = '';
  message = '';
  appointmentSpecParams : AppointmentSpecParams = {patientId:undefined,doctorId: undefined, startDate: undefined, endDate: undefined, sort:'', pageSize: 3, pageNumber: 1}

  constructor(private appointmentService: AppointmentService, private router: Router){}

  getAppointmentsByFilter()
  {
      this.loading = true;
      
       this.appointmentService.getDoctorAppointmentsByFilterCount(this.appointmentSpecParams.patientId,this.appointmentSpecParams.doctorId,this.appointmentSpecParams.startDate,this.appointmentSpecParams.endDate).subscribe((data: number) => {
          this.appointmentCount = data;
        },
        error => {
          this.error = 'An error has occurred. Please try again later.';
          console.log(error.message);
          alert(error.message);
          this.loading = false;
        }
      );
      
      //this.appointmentSpecParams.pageNumber = 1;
      this.getAppointmentByFilter();
   }

    getAppointmentByFilter()
    {
      this.appointmentService.getDoctorAppointmentsByFilter(this.appointmentSpecParams.patientId,this.appointmentSpecParams.doctorId,this.appointmentSpecParams.startDate,this.appointmentSpecParams.endDate, this.appointmentSpecParams.sort='', this.appointmentSpecParams.pageSize,this.appointmentSpecParams.pageNumber).subscribe((data: Appointment[]) => {
              this.appointments = data;
              console.log(this.list);
              this.loading = false;
              this.message = '';
            },
            error => {
              this.error = 'An error has occurred. Please try again later.';
              console.log(error.message);
              this.loading = false;
            }
        );
    }

    addAppointment() {
      this.router.navigate(['/appointmentdetail/create',0]);
    }
 
}
