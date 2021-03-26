import { ValidatorFn } from "@angular/forms";

export class MiaField {
    key: string = '';
    type: string = '';
    label?: string = '';
    validators?: ValidatorFn[] = [];
}
