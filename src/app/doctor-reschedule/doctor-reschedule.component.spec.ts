import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRescheduleComponent } from './doctor-reschedule.component';

describe('DoctorRescheduleComponent', () => {
  let component: DoctorRescheduleComponent;
  let fixture: ComponentFixture<DoctorRescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorRescheduleComponent]
    });
    fixture = TestBed.createComponent(DoctorRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
