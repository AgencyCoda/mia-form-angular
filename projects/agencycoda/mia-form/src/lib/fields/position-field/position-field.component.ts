import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-position-field',
  templateUrl: './position-field.component.html',
  styleUrls: ['./position-field.component.scss']
})
export class PositionFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputGroup!: UntypedFormGroup;

  inputTop!: UntypedFormControl;
  inputRight!: UntypedFormControl;
  inputBottom!: UntypedFormControl;
  inputLeft!: UntypedFormControl;

  constructor() {
    super();
  }

  createFormControl() {
    // Create inputs
    this.inputTop = new UntypedFormControl();
    this.inputRight = new UntypedFormControl();
    this.inputBottom = new UntypedFormControl();
    this.inputLeft = new UntypedFormControl();

    // Create Group
    this.inputGroup = new UntypedFormGroup({
      'top': this.inputTop,
      'right': this.inputRight,
      'bottom': this.inputBottom,
      'left': this.inputLeft
    });
    // Add in Group
    this.group.addControl(this.field.key, this.inputGroup);
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}

