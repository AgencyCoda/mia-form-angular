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

  protected get showError() : boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
  protected getErrorMessage() {
    let errorKey = Object.keys(this.input.errors!)[0];

    switch (errorKey) {
      case "required" :
      case "requiredtrue" : {
        return "Required";
      }
      case "minlength" : {
        const minLength = this.input.errors!.minlength.requiredLength;
        return `Min ${minLength} ${minLength == 1 ? "character" : "characters"}`;
      }
      case "maxlength" : {
        const maxLength = this.input.errors!.maxlength.requiredLength;
        return `Max ${maxLength} ${maxLength == 1 ? "character" : "characters"}`;
      }
      case "pattern" : {
        return "Invalid";
      }
      case "min" : {
        return "Min" + this.input.errors!.min.min;
      }
      case "max" : {
        return "Max" + this.input.errors!.max.max;
      }
      case "email" : {
        return "Invalid email";
      }
    }

    // Generic failsafe message
    return "Invalid";
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
