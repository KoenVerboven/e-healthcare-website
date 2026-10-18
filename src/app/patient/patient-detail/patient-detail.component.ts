import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [],
  templateUrl: './patient-detail.component.html',
  styleUrl: './patient-detail.component.css'
})
export class PatientDetailComponent {

  pageTitle: string = 'Patient Detail';
  formAction: string = 'detail';

  updateClick() {
    throw new Error('Method not implemented.');
  }

  navigateBack() {
    throw new Error('Method not implemented.');
  }

}
