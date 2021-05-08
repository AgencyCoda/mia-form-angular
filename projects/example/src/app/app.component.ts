import { MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MiaField, MiaFormComponent, MiaFormConfig } from 'projects/agencycoda/mia-form/src/public-api';
import { Entity } from './entitiy';
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

  constructor(
    protected testService: TestService
  ) {

  }

  ngOnInit(): void {
    this.loadItem();
    this.loadForm();
  }

  onClickSend() {
    this.miaForm.submit().subscribe(result => {
      console.log('--Observable--');
      console.log(result);
    });
  }

  onSubmit(item: Entity) {
    console.log('--SUBMIT--');
    console.log(item);
  }

  loadItem() {
    this.item = new Entity();
    /*this.item.title = 'Noticia titue';
    this.item.subtitle = 'Subitulo';*/
    this.item.caption = 'asld jasld kjaslkdjaklj dakls jdalkjd aslkdj alkdj aklj dalkajslk jadlsk jakslsd lakj';
    this.item.status = 1;
    this.item.date = '2021-04-08 04:20:00';
    this.item.vendors = [
      { id: 1, title: 'Vendor 1' }
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
      { key: 'status', type: 'select', label: 'Estado', extra: {
        options: [
          { id: 0, title: 'Estado 1' },
          { id: 1, title: 'Estado 2' },
          { id: 2, title: 'Estado 3' },
        ]
      }},
      { key: 'vendor-select', type: 'select-service', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },
      { key: 'avatars', type: 'avatar-list-service', extra: { service: this.testService, field_display: 'title', field_photo: 'photo', field_list: 'avatars-auto', query: new MiaQuery() } },
      { key: 'data', type: MiaField.TYPE_LIST_STRING, label: 'Items:', caption: '' },
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }
}
