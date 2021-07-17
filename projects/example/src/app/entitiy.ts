export class Entity {
    id = 0;
    firstname = '';
    title = '';
    subtitle = '';
    caption = '';
    date = '';
    event_start = '';
    event_end = '';
    status = 0;
    city_id?: number;

    vendors: Array<any> = [];
    tags: Array<string> = [];
}