import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';
import * as moment from 'moment';

@Component({
  selector: 'mia-event-field',
  templateUrl: './event-field.component.html',
  styleUrls: ['./event-field.component.scss']
})
export class EventFieldComponent extends MiaBaseFieldComponent implements OnInit {

  isFirstLoad = true;
  isFirstLoadEnd = true;

  internalStartDate = new FormControl(moment());
  internalStartHour = new FormControl('00:00');
  internalEndDate = new FormControl();
  internalEndHour = new FormControl('00:00');

  hours = new Array<any>();

  inputEnd = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadConfig();
    this.createFormControl();
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Add in Group
    this.group.addControl(this.field.key, this.input);
    // Add in Group
    this.group.addControl(this.field.extra.field_end_key, this.inputEnd);
    
    this.input.valueChanges.subscribe(item => {
      if(!this.isFirstLoad || item == undefined){
        return;
      }

      this.isFirstLoad = false;

      this.internalStartDate.setValue(item);
      this.internalStartHour.setValue(item.format('HH:mm'));
    });

    this.inputEnd.valueChanges.subscribe(item => {
      if(!this.isFirstLoadEnd || item == undefined){
        return;
      }

      this.isFirstLoadEnd = false;

      this.internalEndDate.setValue(item);
      this.internalEndHour.setValue(item.format('HH:mm'));
    });
  }

  loadConfig() {
    let item = moment('00:00', 'hh:mm');
    for (let i = 0; i < 96; i++) {
      this.hours.push({ value: item.format('HH:mm'), title: item.format('hh:mma') });
      item.add(15, 'minutes');
    }

    this.internalStartDate.valueChanges.subscribe(item => {
      if(item == undefined || this.internalEndDate.value != undefined){
        return;
      }

      this.internalEndDate.setValue(moment(item));
    });

    this.internalStartHour.valueChanges.subscribe(hour => {
      if(hour == '' || hour == undefined){
        return;
      }

      let dateFull = this.internalStartDate.value;
      if(dateFull == undefined){
        return;
      }

      let data = hour.split(':');

      dateFull.hour(parseInt(data[0]));
      dateFull.minutes(parseInt(data[1]));
      this.input.setValue(dateFull);
    });

    this.internalEndHour.valueChanges.subscribe(hour => {
      if(hour == '' || hour == undefined){
        return;
      }

      let dateFull = this.internalEndDate.value;
      if(dateFull == undefined){
        return;
      }

      let data = hour.split(':');

      dateFull.hour(parseInt(data[0]));
      dateFull.minutes(parseInt(data[1]));
      this.inputEnd.setValue(dateFull);
    });
  }
}
