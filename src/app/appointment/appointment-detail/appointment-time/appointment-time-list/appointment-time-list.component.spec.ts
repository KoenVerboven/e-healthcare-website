import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTimeListComponent } from './appointment-time-list.component';

describe('AppointmentTimeListComponent', () => {
  let component: AppointmentTimeListComponent;
  let fixture: ComponentFixture<AppointmentTimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentTimeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
