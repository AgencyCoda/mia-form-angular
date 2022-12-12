import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
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
    this.input = new UntypedFormControl();
    // Add in Group
    this.group.addControl(this.field.key, this.input);
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    let elements = (group.get(field.key)?.value == undefined || group.get(field.key)?.value.length == 0) ? field.extra.elements : group.get(field.key)?.value;
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
    element.val = values.find(i => i.type == element.type)?.val ?? '';
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
