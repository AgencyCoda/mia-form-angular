import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MiaBaseFieldComponent, MiaField } from 'projects/agencycoda/mia-form/src/public-api';

@Component({
  selector: 'app-example-custom-field',
  templateUrl: './example-custom-field.component.html',
  styleUrls: ['./example-custom-field.component.scss']
})
export class ExampleCustomFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  static updateValuesByItem(group: UntypedFormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: UntypedFormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}
