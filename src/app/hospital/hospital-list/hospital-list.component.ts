import { Component } from '@angular/core';
import { Hospital } from '../models/hospital.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-list.component.html',
  styleUrl: './hospital-list.component.css'
})
export class HospitalListComponent {
  PageTitle: string = 'Hospital List';
  hospitals: Hospital[] = [
    { id: 1, name: 'General Hospital', address: '123 Main St', phonenumber: '555-1234',email:'general@hospital.com' },
    { id: 2, name: 'City Medical Center', address: '456 Oak Ave', phonenumber: '555-5678',email:'city@medical.com' },
    { id: 3, name: 'County Hospital', address: '789 Pine Rd', phonenumber: '555-9012',email:'county@hospital.com'  }
  ];
}
