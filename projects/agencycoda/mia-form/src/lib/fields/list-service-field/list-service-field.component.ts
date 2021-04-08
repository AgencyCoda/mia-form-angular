import { MiaBaseCrudHttpService, MiaPagination } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { AutocompleteServiceFieldComponent } from '../autocomplete-service-field/autocomplete-service-field.component';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-list-service-field',
  templateUrl: './list-service-field.component.html',
  styleUrls: ['./list-service-field.component.scss']
})
export class ListServiceFieldComponent extends AutocompleteServiceFieldComponent implements OnInit {

  dataItems?: Array<any>;
  
  _isLoading = true;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadItems();
  }

  loadItems() {
    if(this.field.extra.field_list == undefined){
      return;
    }
    
    this._isLoading = true;
  }
}
