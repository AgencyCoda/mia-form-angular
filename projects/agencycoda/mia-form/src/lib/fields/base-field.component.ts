import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MiaField } from "../entities/mia-field";

@Component({
    selector: 'mia-base-field',
    template: ''
})
export class MiaBaseFieldComponent implements OnInit {

    @Input() group!: FormGroup;
    @Input() field!: MiaField;
    //@Input() column: MiaColumn = new MiaColumn();
    //@Input() item: any;

    input!: FormControl;

    constructor() {
        
    }

    ngOnInit(): void {
        this.createFormControl();
    }

    createFormControl() {
        // Create Control
        this.input = new FormControl();
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
}
