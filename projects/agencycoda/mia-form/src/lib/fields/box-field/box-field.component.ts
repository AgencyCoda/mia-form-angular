import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-box-field',
  templateUrl: './box-field.component.html',
  styleUrls: ['./box-field.component.scss']
})
export class BoxFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }
}
