import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-tags-field',
  templateUrl: './tags-field.component.html',
  styleUrls: ['./tags-field.component.scss']
})
export class TagsFieldComponent extends MiaBaseFieldComponent implements OnInit {

  tags = new Array<string>();

  constructor() {
    super();
  }

  addTagFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.tags.push(event.value);
      event.input!.value = '';
    }

    this.input.setValue(this.tags);
    console.log(this.input.value);
  }

  remove(tag: string) {
    let index = this.tags.indexOf(tag);
    if(index >= 0) {
      this.tags.splice(index, 1);
    }
    
    this.input.setValue(this.tags);
    console.log(this.input.value);
  }
}
