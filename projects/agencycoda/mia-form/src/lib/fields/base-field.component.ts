import { Component, Input, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MiaField } from "../entities/mia-field";

@Component({
    selector: 'mia-base-field',
    template: ''
})
export class MiaBaseFieldComponent implements OnInit {

    @Input() group!: UntypedFormGroup;
    @Input() field!: MiaField;
    //@Input() column: MiaColumn = new MiaColumn();
    //@Input() item: any;

    input!: UntypedFormControl;

    constructor() {
        
    }

    ngOnInit(): void {
        this.createFormControl();
    }

    createFormControl() {
        // Create Control
        this.input = new UntypedFormControl();
        // Config validators
        if(this.field.validators != undefined && this.field.validators.length > 0){
            this.input.setValidators(this.field.validators);
        }
        // If include default value
        if(this.field.extra && this.field.extra.default_value){
          this.input.setValue(this.field.extra.default_value);
        }
        // Add in Group
        this.group.addControl(this.field.key, this.input);
    }

    getFieldValueByKey(item: any, key: string|Array<string>|undefined): any {
        if(key == undefined){
          return '';
        }
  
        if (typeof key == 'string' && item[key] != undefined) {
          return item[key];
        }
  
        let valueFinal = item;
        for (const keyObj of key!) {
          if(valueFinal[keyObj] == undefined){
            return '';
          }
          valueFinal = valueFinal[keyObj];
        }
        return valueFinal;
      }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
