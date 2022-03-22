import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';
import { MiaField } from '../../entities/mia-field';

@Component({
  selector: 'lib-properties-field',
  templateUrl: './properties-field.component.html',
  styleUrls: ['./properties-field.component.scss']
})
export class PropertiesFieldComponent extends MiaBaseFieldComponent {

  constructor() {
    super();
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    this.input.setValue([]);
    // Add in Group
    this.group.addControl(this.field.key, this.input);
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    let elements = field.extra.elements ?? [];
    if(elements.length <= 0){
      return;
    }

    let values = item[field.key] ?? [];
    elements.forEach((element: any) => {
      PropertiesFieldComponent.processElement(element, values);
    });

    group.get(field.key)?.setValue(elements);
  }

  static processElement(element: any, values: Array<any>) {
    element.id = 0;
    element.val = '';

    for (const value of values) {
      if(value.type != element.type){
        continue;
      }

      element.id = value.id;
      element.val = value.val;
    }
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
