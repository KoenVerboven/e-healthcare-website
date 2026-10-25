import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
 PageTitle: string = 'Appointment List';

constructor(private router: Router){}


addAppointment() {
  this.router.navigate(['/appointmentdetail/create',0]);
}

}
