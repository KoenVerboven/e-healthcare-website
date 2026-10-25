import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalrecordSwitchboardComponent } from './medicalrecord-switchboard.component';

describe('MedicalrecordSwitchboardComponent', () => {
  let component: MedicalrecordSwitchboardComponent;
  let fixture: ComponentFixture<MedicalrecordSwitchboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalrecordSwitchboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalrecordSwitchboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
