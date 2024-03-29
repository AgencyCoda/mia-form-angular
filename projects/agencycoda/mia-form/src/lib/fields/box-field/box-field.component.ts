import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-box-field',
  templateUrl: './box-field.component.html',
  styleUrls: ['./box-field.component.scss']
})
export class BoxFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    MiaBaseFieldComponent.updateValuesByItemFieldsOld(field.extra.fields, group, item);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    MiaBaseFieldComponent.updateItemByFormFieldsOld(field.extra.fields, group, item);
  }
}
