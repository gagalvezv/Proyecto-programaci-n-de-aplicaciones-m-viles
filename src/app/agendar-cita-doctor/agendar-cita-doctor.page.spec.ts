import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AgendarCitaDoctorPage } from './agendar-cita-doctor.page';
import { IonicModule } from '@ionic/angular';

describe('AgendarCitaDoctorPage', () => {
  let component: AgendarCitaDoctorPage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarCitaDoctorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AgendarCitaDoctorPage);
    component = fixture.componentInstance;
  });

  it('Deberia renderizar componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a obtenerMedicos en ngOnInit', () => {
    spyOn(component, 'obtenerMedicos');
    component.ngOnInit();
    expect(component.obtenerMedicos).toHaveBeenCalled();
  });

  it('debería obtener lista de médicos de la API', fakeAsync(() => {
    const mockResponse = {
      results: [
        { name: 'Dr. Smith' },
        { name: 'Dr. Jones' },
      ],
    };
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    component.obtenerMedicos();
    tick();

    expect(component.ListaMedicos).toEqual(mockResponse.results);
  }));

  it('debería manejar errores en obtenerMedicos', fakeAsync(() => {
    const consoleErrorSpy = spyOn(console, 'error');
    spyOn(window, 'fetch').and.returnValue(Promise.reject('API error'));

    component.obtenerMedicos();
    tick();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error:', 'API error');
  }));
});

