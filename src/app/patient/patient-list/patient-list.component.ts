import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {
  PageTitle: string = 'Patient List';
  patients: Patient[] = [
    { id: 1, lastname: 'Doe', firstname: 'John', address: '123 Main St', phoneNumber: '555-1234', email: 'john.doe@example.com' ,dateOfBirth: new Date('1990-01-01'), gender: 'Male', insuranceNumber: 'INS123456', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'Jane Doe', emergencyContactPhoneNumber: '555-5678', emergencyContactDescription: 'Wife'   },
    { id: 2, lastname: 'Smith', firstname: 'Jane', address: '456 Oak Ave', phoneNumber: '555-5678', email: 'jane.smith@example.com' ,dateOfBirth: new Date('1985-05-15'), gender: 'Female', insuranceNumber: 'INS789012', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'John Smith', emergencyContactPhoneNumber: '555-5678', emergencyContactDescription: 'Husband'   },
    { id: 3, lastname: 'Johnson', firstname: 'Michael', address: '789 Pine Rd', phoneNumber: '555-9012', email: 'michael.johnson@example.com' ,dateOfBirth: new Date('1988-08-20'), gender: 'Male', insuranceNumber: 'INS345678', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'Lisa Johnson', emergencyContactPhoneNumber: '555-9012', emergencyContactDescription: 'Sister'   },
    { id: 4, lastname: 'Davis', firstname: 'Emily', address: '321 Elm St', phoneNumber: '555-3456', email: 'emily.davis@example.com' ,dateOfBirth: new Date('1992-12-10'), gender: 'Female', insuranceNumber: 'INS901234', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'Robert Davis', emergencyContactPhoneNumber: '555-3456', emergencyContactDescription: 'Brother'   },
    { id: 5, lastname: 'Brown', firstname: 'William', address: '654 Cedar Ln', phoneNumber: '555-6789', email: 'william.brown@example.com' ,dateOfBirth: new Date('1985-11-25'), gender: 'Male', insuranceNumber: 'INS567890', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'Laura Brown', emergencyContactPhoneNumber: '555-6789', emergencyContactDescription: 'Wife'   },
    { id: 6, lastname: 'Wilson', firstname: 'Olivia', address: '987 Maple St', phoneNumber: '555-2345', email: 'olivia.wilson@example.com' ,dateOfBirth: new Date('1990-03-15'), gender: 'Female', insuranceNumber: 'INS134678', insuranceProvider: 'HealthCare Inc.', insuranceExpiryDate: new Date('2025-12-31'), emergencyContactName: 'Robert Wilson', emergencyContactPhoneNumber: '555-2345', emergencyContactDescription: 'Husband'   }
   

  ];
}
