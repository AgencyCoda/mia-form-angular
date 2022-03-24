import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesLabelFieldComponent } from './properties-label-field.component';

describe('PropertiesLabelFieldComponent', () => {
  let component: PropertiesLabelFieldComponent;
  let fixture: ComponentFixture<PropertiesLabelFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesLabelFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesLabelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
