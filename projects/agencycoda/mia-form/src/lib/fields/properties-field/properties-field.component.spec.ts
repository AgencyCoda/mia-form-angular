import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesFieldComponent } from './properties-field.component';

describe('PropertiesFieldComponent', () => {
  let component: PropertiesFieldComponent;
  let fixture: ComponentFixture<PropertiesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
