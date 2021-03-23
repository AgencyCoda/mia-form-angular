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
        console.log('--Control--');
        console.log(this.field);
        this.input = new FormControl(this.field.key);
    }
}
