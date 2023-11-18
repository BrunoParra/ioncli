import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPrestarPage } from './form-prestar.page';

describe('FormPrestarPage', () => {
  let component: FormPrestarPage;
  let fixture: ComponentFixture<FormPrestarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormPrestarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
