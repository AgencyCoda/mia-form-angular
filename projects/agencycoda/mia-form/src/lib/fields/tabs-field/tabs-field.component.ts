import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-tabs-field',
  templateUrl: './tabs-field.component.html',
  styleUrls: ['./tabs-field.component.scss']
})
export class TabsFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }
}
