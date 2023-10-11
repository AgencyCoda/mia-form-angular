import { MiaBaseFieldComponent } from 'projects/agencycoda/mia-form/src/lib/fields/base-field.component'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.css']
})
export class CurrencyFieldComponent extends MiaBaseFieldComponent {

  constructor() {
    super();
  }

}
