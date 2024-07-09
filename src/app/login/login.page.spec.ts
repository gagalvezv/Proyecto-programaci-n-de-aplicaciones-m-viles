import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verifica que se renderizo el login', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
