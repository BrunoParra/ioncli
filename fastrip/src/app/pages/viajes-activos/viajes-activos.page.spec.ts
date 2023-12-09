import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesActivosPage } from './viajes-activos.page';

describe('ViajesActivosPage', () => {
  let component: ViajesActivosPage;
  let fixture: ComponentFixture<ViajesActivosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesActivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
