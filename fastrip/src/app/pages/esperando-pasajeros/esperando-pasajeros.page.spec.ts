import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsperandoPasajeroPage } from './esperando-pasajeros.page';

describe('EsperandoPasajerosPage', () => {
  let component: EsperandoPasajeroPage;
  let fixture: ComponentFixture<EsperandoPasajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsperandoPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
