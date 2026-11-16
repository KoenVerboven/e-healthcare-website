import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTimeItemComponent } from './appointment-time-item.component';

describe('AppointmentTimeItemComponent', () => {
  let component: AppointmentTimeItemComponent;
  let fixture: ComponentFixture<AppointmentTimeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentTimeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentTimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
