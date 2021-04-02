import { ValidatorFn } from "@angular/forms";

export class MiaField {
    key: string = '';
    type: string = '';
    label?: string = '';
    validators?: ValidatorFn[] = [];
    classes?: string = '';
    isDisabled?: boolean = false;
    placeholder?: string = '';
    caption?: string = '';
    extra?: any;
}
