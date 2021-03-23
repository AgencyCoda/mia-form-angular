import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.css']
})
export class HtmlFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}