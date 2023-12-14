import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCaseHistoryComponent } from './patient-case-history.component';

describe('PatientCaseHistoryComponent', () => {
  let component: PatientCaseHistoryComponent;
  let fixture: ComponentFixture<PatientCaseHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCaseHistoryComponent]
    });
    fixture = TestBed.createComponent(PatientCaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
