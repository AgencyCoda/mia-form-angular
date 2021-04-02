import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MiaFormConfig } from 'projects/agencycoda/mia-form/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config!: MiaFormConfig;

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.config = new MiaFormConfig();
    this.config.fields = [
      { key: 'title', type: 'string', label: 'Title', validators: [Validators.required], caption: 'El titulo de la noticia.' },
      { key: 'caption', type: 'string' },
      { key: 'subtitle', type: 'string', },
      { key: 'status', type: 'select', label: 'Estado', extra: {
        options: [
          { id: 0, title: 'Estado 1' },
          { id: 1, title: 'Estado 2' },
          { id: 2, title: 'Estado 3' },
        ]
      }},
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }
}
