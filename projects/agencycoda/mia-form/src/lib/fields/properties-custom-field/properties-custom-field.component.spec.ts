import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCustomFieldComponent } from './properties-custom-field.component';

describe('PropertiesCustomFieldComponent', () => {
  let component: PropertiesCustomFieldComponent;
  let fixture: ComponentFixture<PropertiesCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesCustomFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
