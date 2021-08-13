import { MiaFile } from "@agencycoda/mia-core";

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
    file_one?: MiaFile;

    vendors: Array<any> = [];
    tags: Array<string> = [];
}