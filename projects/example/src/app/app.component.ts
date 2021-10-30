import { MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MiaField, MiaFilterBoxConfig, MiaFormComponent, MiaFormConfig } from 'projects/agencycoda/mia-form/src/public-api';
import { of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Entity } from './entitiy';
import { ExampleCustomFieldComponent } from './fields/example-custom-field/example-custom-field.component';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  config!: MiaFormConfig;
  item!: Entity;

  filterBox!: MiaFilterBoxConfig;

  constructor(
    protected testService: TestService
  ) {

  }

  ngOnInit(): void {
    this.loadItem();
    this.loadForm();
    this.loadFilterBox();
    //this.loadFormMarketplace();
  }

  onClickSend() {
    this.miaForm.submit().subscribe(result => {
      console.log('--Observable--');
      console.log(result);
    });
  }

  onChangeDateFilter(result: any) {
    console.log(result);
  }

  onSubmit(item: Entity) {
    console.log('--SUBMIT--');
    console.log(item);
  }

  loadItem() {
    this.item = new Entity();
    /*this.item.title = 'Noticia titue';
    this.item.subtitle = 'Subitulo';*/
    this.item.firstname = 'Matias';
    this.item.caption = 'asld jasld kjaslkdjaklj dakls jdalkjd aslkdj alkdj aklj dalkajslk jadlsk jakslsd lakj';
    this.item.status = 1;
    this.item.city_id = 1;
    this.item.date = '2021-04-08 04:20:00';
    this.item.tags = ['tag1', 'tag2', 'tag3'];
    this.item.event_start = '2021-07-19 16:00:00';
    this.item.event_end = '2021-07-20 18:00:00';
    this.item.vendors = [
      { id: 1, title: 'Vendor 1' }
    ];
    this.item.file_one = { name: 'File.pdf', url: '', size: 500, mediaLink: '' };
  }

  loadFormMarketplace() {
    this.config = new MiaFormConfig();
    this.config.hasSubmit = false;
    this.config.fields = [
      { key: 'box-one', type: MiaField.TYPE_BOX, extra: { fields: [
        { key: 'features', type: MiaField.TYPE_CHIPS_AND_SELECT, label: '', caption: '', extra: { 
          title: 'Valores del producto', field_display: 'title',
          options: [
            { id: 0, title: 'Reciclado' },
            { id: 1, title: 'Rehusado' },
            { id: 2, title: 'Sustentable' },
            { id: 3, title: 'Libre de animal' },
          ]
        } },
        { key: '', type: MiaField.TYPE_LABEL, label: 'Marca del producto', classes: 'label-form' },
        { key: 'brand', type: 'string', label: 'Marca del producto' },
        { key: 'caption', type: MiaField.TYPE_TEXT, label: 'Descripcion del producto' },
        { key: 'row-one', type: MiaField.TYPE_ROW, extra: { fields: [
          { key: '', type: MiaField.TYPE_LABEL, label: 'Precio' },
          { key: '', type: MiaField.TYPE_LABEL, label: 'Categoría' },
        ] }  },
        { key: 'row-one', type: MiaField.TYPE_ROW, extra: { fields: [
          { key: 'price', type: 'string', label: 'Precio' },
          { key: 'category', type: 'string', label: 'Categoria' },
        ] }  }
      ] }  },
      { key: 'city_id', type: MiaField.TYPE_CITY, label: 'Ciudad', extra: { basePath: 'http://0.0.0.0:8080/' } },
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }

  loadForm() {
    this.config = new MiaFormConfig();
    this.config.hasSubmit = false;
    this.config.fields = [
      { key: 'photo', type: 'photo', label: 'Photo', caption: 'Foto del usuario.' },
      { key: 'title', type: 'string', label: 'Title', validators: [Validators.required], caption: 'El titulo de la noticia.' },
      { key: 'product', type: 'autocomplete', extra: { 
        options: ['One', 'Two', 'Three'] 
      }},
      { key: 'vendor', type: 'autocomplete-service', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },
      { key: 'caption', type: 'string' },
      { key: 'date', type: 'date', label: 'Fecha' },
      { key: 'subtitle', type: 'string', },
      { key: 'vendors', type: 'list-service', extra: { service: this.testService, field_display: 'title', field_list: 'vendors-auto', query: new MiaQuery() } },
      { key: '', type: MiaField.TYPE_LABEL, label: 'Esto es una <strong>prueba</strong> texto plano sin funcionalidad, admite HTML.', classes: 'label-custom' },
      { key: 'status', type: 'select', label: 'Estado', extra: {
        options: [
          { id: 0, title: 'Estado 1' },
          { id: 1, title: 'Estado 2' },
          { id: 2, title: 'Estado 3' },
        ],
        can_add: true,
        add_title: 'Add new Status',
        add_subject: new Subject<any>().pipe(switchMap(it => of({ id: 3, title: 'Estado 4'})))
      }},
      { key: 'vendor-select', type: 'select-service', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },
      { key: 'avatars', type: 'avatar-list-service', extra: { service: this.testService, field_display: 'title', field_photo: 'photo', field_list: 'avatars-auto', query: new MiaQuery() } },
      { key: 'data', type: MiaField.TYPE_LIST_STRING, label: 'Items:', caption: '' },
      { key: 'chips', type: MiaField.TYPE_CHIPS_AND_SELECT, label: '', caption: '', extra: { 
        title: 'State', field_display: 'title',
        options: [
          { id: 0, title: 'State 1' },
          { id: 1, title: 'State 2' },
          { id: 2, title: 'State 3' },
        ]
      } },
      { key: 'tag', type: MiaField.TYPE_STRING_WITH_COLOR, label: 'Tag name', caption: '', appearance: 'outline', extra: { key_color: 'color' } },
      { key: 'divider-1', type: MiaField.TYPE_DIVIDER },
      { key: 'row-one', type: MiaField.TYPE_ROW, extra: { fields: [
        { key: 'firstname', type: 'string', label: 'Nombre' },
        { key: 'lastname', type: 'string', label: 'Apellido' },
      ] }  },
      { key: 'tags', type: MiaField.TYPE_TAGS, label: 'Tags', caption: '', appearance: 'outline' },
      { key: 'chips-service', type: MiaField.TYPE_CHIPS_AND_SELECT_SERVICE, label: 'Seleccionador multiple chip', caption: '', extra: { title: 'Multiple chips service', service: this.testService, field_display: 'title', field_list: 'chips-auto', query: new MiaQuery() } },
      { key: 'chips-service-with-add', type: MiaField.TYPE_CHIPS_AND_SELECT_SERVICE, label: 'Seleccionador multiple chip', caption: '', extra: { 
        title: 'Multiple chips service', 
        service: this.testService, 
        field_display: 'title', 
        field_list: 'chips-auto', 
        query: new MiaQuery(),
        can_add: true,
        add_title: 'Add new Status',
        add_subject: new Subject<any>().pipe(switchMap(it => of({ id: 30, title: 'Estado 4'}))) } 
      },
      { key: 'content-html', type: MiaField.TYPE_HTML, label: 'Contenido del post', caption: '', extra: { height: 400 } },
      { key: 'title-header', type: MiaField.TYPE_STRING_TITLE, placeholder: 'Write your title', caption: '' },
      { key: 'photo-header', type: MiaField.TYPE_PHOTO_HEADER, label: 'Photo Header', caption: 'Foto del header.', extra: { saveObj: true } },
      { key: 'event_start', type: MiaField.TYPE_EVENT, label: 'Fecha del evento', extra: { field_end_key: 'event_end'} },
      { key: 'custom_example', type: MiaField.TYPE_CUSTOM, extra: { component: ExampleCustomFieldComponent } },
      { key: 'file_one', type: MiaField.TYPE_FILE_ONE, label: 'Propuesta' },
      { key: 'input-with-chips', type: MiaField.TYPE_INPUT_WITH_CHIP_SERVICE, label: 'Escribir chips', caption: '', extra: { title: 'Escribir chips', service: this.testService, field_display: 'title', field_list: 'chips-auto', query: new MiaQuery() } },
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }

  loadFilterBox() {
    this.filterBox = new MiaFilterBoxConfig();
    this.filterBox.filters = [
      { title: 'Status is closed', value: 1 }
    ];
  }
}
