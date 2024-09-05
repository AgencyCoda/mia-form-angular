import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-list-string-field',
  templateUrl: './list-string-field.component.html',
  styleUrls: ['./list-string-field.component.css']
})
export class ListStringFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputList!: UntypedFormArray;

  constructor() {
    super();
  }

  onClickAdd() {
    let control = new UntypedFormControl();
    control.setValue('');
    this.inputList.push(control);
  }

  getControlByIndex(index: number): UntypedFormControl {
    return this.inputList.controls[index] as UntypedFormControl;
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
  }

  createFormControl() {
    // Create Control
    this.input = new UntypedFormControl();
    // Create Control
    this.inputList = new UntypedFormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}
