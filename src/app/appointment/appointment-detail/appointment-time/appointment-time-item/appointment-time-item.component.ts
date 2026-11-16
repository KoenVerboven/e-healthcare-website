import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-time-item',
  standalone: true,
  imports: [],
  templateUrl: './appointment-time-item.component.html',
  styleUrl: './appointment-time-item.component.css'
})
export class AppointmentTimeItemComponent {
  
  @Input({required:true})appointmentTimeItem!:{
      id:number;
      time:string;
      visible:boolean;
      enabled:boolean;
   }
}
