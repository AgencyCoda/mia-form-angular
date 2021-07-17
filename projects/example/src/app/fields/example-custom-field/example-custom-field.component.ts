import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from 'projects/agencycoda/mia-form/src/public-api';

@Component({
  selector: 'app-example-custom-field',
  templateUrl: './example-custom-field.component.html',
  styleUrls: ['./example-custom-field.component.scss']
})
export class ExampleCustomFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
