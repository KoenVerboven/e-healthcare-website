import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-detail',
  standalone: true,
  imports: [],
  templateUrl: './hospital-detail.component.html',
  styleUrl: './hospital-detail.component.css'
})
export class HospitalDetailComponent {
  formAction: string = 'detail';
  pageTitle:string = 'Hospital Detail';
  
  updateClick() {
    throw new Error('Method not implemented.');
  }
  
  navigateBack() {
    throw new Error('Method not implemented.');
  }

}
