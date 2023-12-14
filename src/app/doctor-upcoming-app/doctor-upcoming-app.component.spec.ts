import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpcomingAppComponent } from './doctor-upcoming-app.component';

describe('DoctorUpcomingAppComponent', () => {
  let component: DoctorUpcomingAppComponent;
  let fixture: ComponentFixture<DoctorUpcomingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpcomingAppComponent]
    });
    fixture = TestBed.createComponent(DoctorUpcomingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
