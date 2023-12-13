import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRescheduleComponent } from './patient-reschedule.component';

describe('PatientRescheduleComponent', () => {
  let component: PatientRescheduleComponent;
  let fixture: ComponentFixture<PatientRescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRescheduleComponent]
    });
    fixture = TestBed.createComponent(PatientRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
