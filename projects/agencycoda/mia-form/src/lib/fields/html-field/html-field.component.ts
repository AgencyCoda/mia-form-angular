import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.css']
})
export class HtmlFieldComponent extends MiaBaseFieldComponent implements OnInit {

  heightEditor = 250;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.loadConfig();
  }

  loadConfig() {
    if(this.field.extra.height != undefined){
      this.heightEditor = this.field.extra.height;
    }
  }
}