import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'mia-select-service-field',
  templateUrl: './select-service-field.component.html',
  styleUrls: ['./select-service-field.component.scss']
})
export class SelectServiceFieldComponent extends SelectFieldComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadItems();
  }

  loadItems() {
    // Verify if has extra params
    let extraParams = this.field.extra.extraParams;
    if(extraParams == undefined){
      extraParams = {};
    }

    let query: MiaQuery = this.field.extra.query;
    query.itemPerPage = 5000;
    let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
    service.listWithExtras(query, extraParams).then(result => {
      this.items = result.data;
    });
  }
}
