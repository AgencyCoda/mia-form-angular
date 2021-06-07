export class Entity {
    id = 0;
    firstname = '';
    title = '';
    subtitle = '';
    caption = '';
    date = '';
    status = 0;
    city_id?: number;

    vendors: Array<any> = [];
}