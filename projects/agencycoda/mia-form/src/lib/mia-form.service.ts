import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MiaField } from './entities/mia-field';
import { MiaFormConfig } from './entities/mia-form-config';
import * as moment from 'moment';

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
      if(field.type == 'date'){
        control.setValue(moment(item[field.key], 'YYYY-MM-DD hh:mm:ss'));
      } else if(field.type == MiaField.TYPE_STRING_WITH_COLOR){
        control.setValue(item[field.key]);
        let controlColor = group.controls[field.extra.key_color];
        controlColor.setValue(item[field.extra.key_color]);
      } else {
        control.setValue(item[field.key]);
      }
    }
  }

  updateItemByForm(config: MiaFormConfig, group: FormGroup, item: any): any {
    for (const field of config.fields) {
      let control = group.controls[field.key];
      if(control == undefined){
        continue;
      }
      if(field.type == 'date' && control.value != undefined){
        item[field.key] = control.value.format('YYYY-MM-DD hh:mm:ss');
      }if(field.type == MiaField.TYPE_STRING_WITH_COLOR && control.value != undefined){
        item[field.key] = control.value;
        let controlColor = group.controls[field.extra.key_color];
        if(controlColor.value != undefined){
          item[field.extra.key_color] = controlColor.value;
        }
      }else {
        item[field.key] = control.value;
      }
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
