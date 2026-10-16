import { Component } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  PageTitle: string = 'Doctor List';
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. John Smith', address: '123 Main St', phoneNumber: '555-1234', email: 'john.smith@hospital.com', medicaltitle: 1, specializationid: 1, licenseNumber: 'ABC123', licenseExpiryDate: new Date('2025-12-31') },   
    { id: 2, name: 'Dr. Jane Doe', address: '456 Oak Ave', phoneNumber: '555-5678', email: 'jane.doe@hospital.com', medicaltitle: 2, specializationid: 2, licenseNumber: 'DEF456', licenseExpiryDate: new Date('2025-12-31') },
    { id: 3, name: 'Dr. Michael Johnson', address: '789 Pine Rd', phoneNumber: '555-9012', email: 'michael.johnson@hospital.com', medicaltitle: 3, specializationid: 3, licenseNumber: 'GHI789', licenseExpiryDate: new Date('2025-12-31') },
    { id: 4, name: 'Dr. Emily Davis', address: '321 Elm St', phoneNumber: '555-3456', email: 'emily.davis@hospital.com', medicaltitle: 4, specializationid: 4, licenseNumber: 'JKL012', licenseExpiryDate: new Date('2025-12-31') }
  ]
}
