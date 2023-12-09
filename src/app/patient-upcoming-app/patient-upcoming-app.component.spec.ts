import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpcomingAppComponent } from './patient-upcoming-app.component';

describe('PatientUpcomingAppComponent', () => {
  let component: PatientUpcomingAppComponent;
  let fixture: ComponentFixture<PatientUpcomingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientUpcomingAppComponent]
    });
    fixture = TestBed.createComponent(PatientUpcomingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
