import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';

@Component({
  selector: 'mia-print-fields',
  templateUrl: './mia-print-fields.component.html',
  styleUrls: ['./mia-print-fields.component.css']
})
export class MiaPrintFieldsComponent implements OnInit {

  @Input() fields: Array<MiaField> = [];
  @Input() group!: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
