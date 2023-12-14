import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateCaseComponent } from './doctor-update-case.component';

describe('DoctorUpdateCaseComponent', () => {
  let component: DoctorUpdateCaseComponent;
  let fixture: ComponentFixture<DoctorUpdateCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpdateCaseComponent]
    });
    fixture = TestBed.createComponent(DoctorUpdateCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
