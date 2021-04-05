import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-autocomplete-service-field',
  templateUrl: './autocomplete-service-field.component.html',
  styleUrls: ['./autocomplete-service-field.component.scss']
})
export class AutocompleteServiceFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

}
