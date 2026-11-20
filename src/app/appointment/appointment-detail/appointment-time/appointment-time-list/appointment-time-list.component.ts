import { Component } from '@angular/core';
import { AppointmentTimeItemComponent } from '../appointment-time-item/appointment-time-item.component';
import { appointmentTimeItems } from '../../appointment-time-list';
import   { AppointmentTime  } from '../../../models/appointmentTime.model';

@Component({
  selector: 'app-appointment-time-list',
  standalone: true,
  imports: [AppointmentTimeItemComponent],
  templateUrl: './appointment-time-list.component.html',
  styleUrl: './appointment-time-list.component.css'
})
export class AppointmentTimeListComponent {
  items: AppointmentTime[] = appointmentTimeItems;
  columnNrs = [1,2,3 ];
}
