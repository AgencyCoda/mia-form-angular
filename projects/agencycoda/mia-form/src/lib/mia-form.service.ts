import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MiaField } from './entities/mia-field';
import { MiaFormConfig } from './entities/mia-form-config';

@Injectable({
  providedIn: 'root'
})
export class MiaFormService {

  constructor() { }

  updateValuesByItem(config: MiaFormConfig, group: FormGroup, item: any) {
    for (const field of config.fields) {
      let control = group.controls[field.key];
      if(control == undefined || item[field.key] == undefined){
        continue;
      }
      if(control instanceof FormArray){
        this.updateValuesByItemInFormArray(control, field.key, item);
        continue;
      }
      control.setValue(item[field.key]);
    }
  }

  updateItemByForm(config: MiaFormConfig, group: FormGroup, item: any): any {
    for (const field of config.fields) {
      let control = group.controls[field.key];
      if(control == undefined){
        continue;
      }
      item[field.key] = control.value;
    }
    return item;
  }

  updateValuesByItemInFormArray(group: FormArray, key: string, item: any) {
    for (const it of item[key]) {
      this.createFormControlAndAdd(it, group);
    }
  }

  createFormControlAndAdd(item: any, group: FormArray) {
    // Create Control
    let input = new FormControl();
    input.setValue(item);
    // Add in Group
    group.push(input);
  }

  getErrors(config: MiaFormConfig, group: FormGroup): Array<string> {
    let errors: Array<string> = [];

    for (const field of config.fields) {
      let control = group.controls[field.key];

      if(control == undefined || control.errors == undefined){
        continue;
      }

      let types = Object.keys(control.errors);
      for (const type of types) {
        errors.push(this.getErrorMessage(config, field, type));
      }
    }

    return errors;
  }

  getErrorMessage(config: MiaFormConfig, field: MiaField, key: string): string {
    for (const error of config.errorMessages!) {
      if(error.key == key){
        return error.message.replace('%label%', field.label!);
      }
    }

    return '';
  }
}
