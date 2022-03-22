import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';
import { MiaField } from '../../entities/mia-field';

@Component({
  selector: 'lib-properties-custom-field',
  templateUrl: './properties-custom-field.component.html',
  styleUrls: ['./properties-custom-field.component.scss']
})
export class PropertiesCustomFieldComponent extends MiaBaseFieldComponent {

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

  onClickRemove(index: number) {
    let data: Array<any> = this.input.value;
    data.splice(index, 1);
    this.input.setValue(data);
  }

  onCreate(): void {
    let data: Array<any> = this.input.value;
    data.push({ id: 0, type: 0, title: '', type_val: 0, val: '' });
    this.input.setValue(data);
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key] == undefined ? [] : item[field.key]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
