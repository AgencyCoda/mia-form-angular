export class MiaFilterType {

    static TYPE_WITHOUT_OPTIONS = 1;
    static TYPE_WRITE = 2;
    static TYPE_DATE_RANGE = 3;
    static TYPE_USERS = 4;
    static TYPE_OPTIONS = 5;
    static TYPE_OPTIONS_SERVICE = 6;

    title: string = '';
    value?: any = '';
    key: string = '';
    type: number = 1;
    options?: Array<any>;
}