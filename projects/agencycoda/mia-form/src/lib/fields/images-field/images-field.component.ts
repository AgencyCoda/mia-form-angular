import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-images-field',
  templateUrl: './images-field.component.html',
  styleUrls: ['./images-field.component.css']
})
export class ImagesFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}