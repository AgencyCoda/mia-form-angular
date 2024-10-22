import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MiaField } from './entities/mia-field';
import { MiaFormConfig } from './entities/mia-form-config';

@Injectable({
  providedIn: 'root'
})
export class MiaFormService {

  constructor() { }

  updateValuesByItem(config: MiaFormConfig, group: UntypedFormGroup, item: any) {
    this.updateValuesByItemFields(config.fields, group, item);
  }

  private updateValuesByItemFields(fields: Array<MiaField>, group: UntypedFormGroup, item: any) {
    for (const field of fields) {
      if(field.type == MiaField.TYPE_TABS){
        for (const tab of field.extra.tabs) {
          this.updateValuesByItemFields(tab.fields, group, item);
        }
      } else if(field.type == MiaField.TYPE_ROW){
        this.updateValuesByItemFields(field.extra.fields, group, item);
      } else {
        this.updateValuesByItemField(field, group, item);
      }
    }
  }

  private updateValuesByItemField(field: MiaField, group: UntypedFormGroup, item: any) {
    if (field.type == 'label') {
      return;
    }

    let control = group.controls[field.key];
    if (field.type == MiaField.TYPE_CUSTOM) {
      if (field.extra.component.updateValuesByItem) {
        field.extra.component.updateValuesByItem(group, item, field);
      }
      return;
    }
    if (control == undefined || item[field.key] == undefined) {
      return;
    }
    if (control instanceof UntypedFormArray) {
      this.updateValuesByItemInFormArray(control, field.key, item);
      return;
    }
    if (field.type == 'date') {
      control.setValue(new Date(item[field.key]).toISOString());
    } else if (field.type == 'event') {
      control.setValue(new Date(item[field.key]).toISOString());
      const controlEnd = group.controls[field.extra.field_end_key];
      controlEnd.setValue(new Date(item[field.extra.field_end_key]).toISOString());
    } else if (field.type == MiaField.TYPE_STRING_WITH_COLOR) {
      control.setValue(item[field.key]);
      const controlColor = group.controls[field.extra.key_color];
      controlColor.setValue(item[field.extra.key_color]);
    } else {
      control.setValue(item[field.key]);
    }
  }

  updateItemByForm(config: MiaFormConfig, group: UntypedFormGroup, item: any): any {
    this.updateItemByFormFields(config.fields, group, item);
    return item;
  }

  private updateItemByFormFields(fields: Array<MiaField>, group: UntypedFormGroup, item: any) {
    for (const field of fields) {
      if(field.type == MiaField.TYPE_TABS){
        for (const tab of field.extra.tabs) {
          this.updateItemByFormFields(tab.fields, group, item);
        }
      }else if(field.type == MiaField.TYPE_ROW){
        this.updateItemByFormFields(field.extra.fields, group, item);
      } else {
        this.updateItemByFormField(field, group, item);
      }
    }
  }

  private updateItemByFormField(field: MiaField, group: UntypedFormGroup, item: any) {
    if(field.type == 'label'){
      return;
    }

    let control = group.controls[field.key];
    // TODO: Cambiar para que todos los fields se comporten de esta manera. Ya asi simplificar el tema del Mia Print
    if(field.type == MiaField.TYPE_CUSTOM){
      if(field.extra.component.updateItemByFormField){
        field.extra.component.updateItemByFormField(group, item, field);
      }
      return;
    }
    if(control == undefined){
      return;
    }
    if(field.type == 'date' && control.value != undefined){
      item[field.key] = control.value.format('YYYY-MM-DD HH:mm:ss');
    } else if(field.type == 'event' && control.value != undefined){

      item[field.key] = control.value.format('YYYY-MM-DD HH:mm:ss');
      let controlEnd = group.controls[field.extra.field_end_key];
      if(controlEnd.value != undefined){
        item[field.extra.field_end_key] = controlEnd.value.format('YYYY-MM-DD HH:mm:ss');
      }

    } else if(field.type == MiaField.TYPE_STRING_WITH_COLOR && control.value != undefined){
      item[field.key] = control.value;
      let controlColor = group.controls[field.extra.key_color];
      if(controlColor.value != undefined){
        item[field.extra.key_color] = controlColor.value;
      }
    } else {
      item[field.key] = control.value;
    }
  }

  updateValuesByItemInFormArray(group: UntypedFormArray, key: string, item: any) {
    for (const it of item[key]) {
      this.createFormControlAndAdd(it, group);
    }
  }

  createFormControlAndAdd(item: any, group: UntypedFormArray) {
    // Create Control
    let input = new UntypedFormControl();
    input.setValue(item);
    // Add in Group
    group.push(input);
  }
}
