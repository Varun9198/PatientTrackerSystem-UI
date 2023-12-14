import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCaseHistoryComponent } from './doctor-case-history.component';

describe('DoctorCaseHistoryComponent', () => {
  let component: DoctorCaseHistoryComponent;
  let fixture: ComponentFixture<DoctorCaseHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorCaseHistoryComponent]
    });
    fixture = TestBed.createComponent(DoctorCaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
