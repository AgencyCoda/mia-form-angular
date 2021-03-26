import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaField } from './entities/mia-field';
import { MiaFormConfig } from './entities/mia-form-config';

@Injectable({
  providedIn: 'root'
})
export class MiaFormService {

  constructor() { }

  getErrors(config: MiaFormConfig, group: FormGroup): Array<string> {
    let errors: Array<string> = [];

    for (const field of config.fields) {
      let control = group.controls[field.key];

      if(control.errors == undefined){
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
