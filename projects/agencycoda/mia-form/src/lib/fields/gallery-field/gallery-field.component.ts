import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-gallery-field',
  templateUrl: './gallery-field.component.html',
  styleUrls: ['./gallery-field.component.scss']
})
export class GalleryFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputList!: UntypedFormArray;

  isUploading = false;

  constructor() {
    super();
  }

  onUploadFile(file: MiaFile | any): void {
    let control = new UntypedFormControl();
    control.setValue({ url: file.url, alt: '', caption: '', name: file.name, size: file.size });
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
    this.inputList = new UntypedFormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}
