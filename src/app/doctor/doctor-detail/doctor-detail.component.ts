import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [],
  templateUrl: './doctor-detail.component.html',
  styleUrl: './doctor-detail.component.css'
})
export class DoctorDetailComponent {

 pageTitle: string = 'Doctor Detail';
 formAction: string = 'detail';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

navigateBack() {
  this.router.navigateByUrl('/doctors');
}
updateClick() {
  throw new Error('Method not implemented.');
}

}
