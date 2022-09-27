import { MiaBaseFieldComponent } from '@agencycoda/mia-form';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat, NgxIntlTelInputComponent } from 'ngx-intl-tel-input';

@Component({
  selector: 'mia-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.css']
})
export class PhoneFieldComponent extends MiaBaseFieldComponent {

  @ViewChild("phoneInput") phoneInput!: NgxIntlTelInputComponent;

  CountryISO = CountryISO;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Add in Group
    this.group.addControl(this.field.key, this.input);
  }
}
