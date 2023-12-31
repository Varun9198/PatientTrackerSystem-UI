import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentDetailsComponent } from './patient-appointment-details.component';

describe('PatientAppointmentDetailsComponent', () => {
  let component: PatientAppointmentDetailsComponent;
  let fixture: ComponentFixture<PatientAppointmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAppointmentDetailsComponent]
    });
    fixture = TestBed.createComponent(PatientAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
