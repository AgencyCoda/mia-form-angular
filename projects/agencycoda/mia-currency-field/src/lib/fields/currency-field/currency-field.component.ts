import { MiaBaseFieldComponent } from '@agencycoda/mia-form';
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
