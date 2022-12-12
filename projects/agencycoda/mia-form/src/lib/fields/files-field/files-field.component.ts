import { MiaFile } from '@agencycoda/mia-core';;
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';
import { MiaField } from '../../entities/mia-field';

@Component({
  selector: 'mia-files-field',
  templateUrl: './files-field.component.html',
  styleUrls: ['./files-field.component.css']
})
export class FilesFieldComponent extends MiaBaseFieldComponent {

  isUploading = false;

  constructor() {
    super();
  }

  createFormControl() {
    // Create Control
    this.input = new UntypedFormControl();
    this.input.setValue([]);
    // Add in Group
    this.group.addControl(this.field.key, this.input);
  }

  onClickRemove(index: number) {
    let data: Array<any> = this.input.value;
    data.splice(index, 1);
    this.input.setValue(data);
  }

  onUploadFile(file: MiaFile | any): void {
    let data: Array<any> = this.input.value;
    data.push(file);
    this.input.setValue(data);
    this.isUploading = false;
  }

  getButtonText() {
    if(this.field.extra && this.field.extra.button_text){
      return this.field.extra.button_text;
    }

    return 'Upload files';
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key] == undefined ? [] : item[field.key]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}