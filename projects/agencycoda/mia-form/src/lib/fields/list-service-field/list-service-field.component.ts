import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-list-service-field',
  templateUrl: './list-service-field.component.html',
  styleUrls: ['./list-service-field.component.scss']
})
export class ListServiceFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

}
