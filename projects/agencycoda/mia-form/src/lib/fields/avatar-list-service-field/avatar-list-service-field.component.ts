import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { SelectServiceFieldComponent } from '../select-service-field/select-service-field.component';

@Component({
  selector: 'mia-avatar-list-service-field',
  templateUrl: './avatar-list-service-field.component.html',
  styleUrls: ['./avatar-list-service-field.component.scss']
})
export class AvatarListServiceFieldComponent extends SelectServiceFieldComponent implements OnInit {

  inputList!: FormArray;

  itemsFiltered: Array<any> = [];

  constructor() {
    super();
  }

  onClickAdd() {
    if(this.input.value == null || this.input.value == undefined){
      return;
    }
    let control = new FormControl();
    control.setValue(this.input.value);
    this.inputList.push(control);
    this.input.setValue(null);
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
  }

  loadItems() {
    let query: MiaQuery = this.field.extra.query;
    query.itemPerPage = 5000;
    let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
    service.list(query).then(result => {
      this.items = result.data;
    });
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Create Control
    this.inputList = new FormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}