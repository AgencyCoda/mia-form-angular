import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-list-string-field',
  templateUrl: './list-string-field.component.html',
  styleUrls: ['./list-string-field.component.css']
})
export class ListStringFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}