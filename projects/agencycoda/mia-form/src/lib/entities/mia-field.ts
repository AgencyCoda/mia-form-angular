import { ValidatorFn } from "@angular/forms";

export class MiaField {

    static TYPE_STRING = 'string';
    static TYPE_SELECT = 'select';
    static TYPE_AUTOCOMPLETE = 'autocomplete';
    static TYPE_AUTOCOMPLETE_SERVICE = 'autocomplete-service';
    static TYPE_LIST_SERVICE = 'list-service';
    static TYPE_SELECT_SERVICE = 'select-service';
    static TYPE_TEXT = 'text';
    static TYPE_DATE = 'date';
    static TYPE_PHOTO = 'photo';

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
