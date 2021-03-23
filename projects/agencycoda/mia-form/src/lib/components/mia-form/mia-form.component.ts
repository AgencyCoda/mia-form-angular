import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaFormConfig } from '../../entities/mia-form-config';

@Component({
  selector: 'mia-form',
  templateUrl: './mia-form.component.html',
  styleUrls: ['./mia-form.component.css']
})
export class MiaFormComponent implements OnInit {

  @Input() config = new MiaFormConfig();

  group: FormGroup = new FormGroup({});

  constructor(
    
  ) { }

  ngOnInit(): void {
     
  }

}
