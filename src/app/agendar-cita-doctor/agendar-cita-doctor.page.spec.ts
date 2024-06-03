import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarCitaDoctorPage } from './agendar-cita-doctor.page';

describe('AgendarCitaDoctorPage', () => {
  let component: AgendarCitaDoctorPage;
  let fixture: ComponentFixture<AgendarCitaDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
