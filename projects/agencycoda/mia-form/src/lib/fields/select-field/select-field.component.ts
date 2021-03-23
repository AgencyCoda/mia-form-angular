import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css']
})
export class SelectFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}