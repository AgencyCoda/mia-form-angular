import { MiaQuery } from '@agencycoda/mia-core';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSelectChange } from '@angular/material/select';
import { MiaFilterBoxConfig } from '../../entities/mia-filter-box-config';
import { MiaFilterSelected, MiaFilterType } from '../../entities/mia-filter-type';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mia-filter-box',
  templateUrl: './mia-filter-box.component.html',
  styleUrls: ['./mia-filter-box.component.scss']
})
export class MiaFilterBoxComponent implements OnInit {

  @ViewChildren('menuAndOr') menuAndOr!: QueryList<MatMenuTrigger>;
  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;
  @ViewChildren('menuConditional') menuConditional!: QueryList<MatMenuTrigger>;

  @Input() config!: MiaFilterBoxConfig;
  @Input() query!: MiaQuery;

  @Output() execCustom = new EventEmitter<MiaFilterSelected>();
  @Output() call = new EventEmitter<Array<MiaFilterSelected>>();

  /**
   * andOrType: 0 = AND, 1 = OR
   * conditional: 0 = Is, 1 = Is not, 2 = Is set (Si tiene valor), 3 = Is not Set (si no tiene valor)
   * 
   */
  actives: Array<MiaFilterSelected> = [];
  /**
   * Verify if some change
   */
  hasChange = false;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  onApplyFilters() {
    if(!this.hasChange){
      return;
    }
    // Reset where
    this.query.resetWhere();
    // Process all filters selected
    this.actives.forEach(ac => {
      if(ac.field?.type == MiaFilterType.TYPE_WITHOUT_OPTIONS){
        this.queryWithoutOptions(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_WRITE){
        this.queryWrite(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_DATE_RANGE){
        this.queryDateRange(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_USERS){
        this.queryUsers(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS){
        this.queryOptions(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS_SERVICE){
        this.queryOptionsService(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS_CUSTOM){
        this.queryOptionsCustom(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_DATE_LIST){
        this.queryDateRange(ac);
      }
    });
    this.call.emit(this.actives);
    this.hasChange = false;
  }

  queryWithoutOptions(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryWrite(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryDateRange(ac: MiaFilterSelected) {
    if(ac.field!.value.start == undefined){
      ac.field!.value.start = moment().startOf('month');
    }
    if(ac.field!.value.end == undefined){
      ac.field!.value.end = moment().endOf('month');
    }
    this.query.addWhereBetween(ac.field!.key, ac.field!.value.start, ac.field!.value.end);
  }

  queryUsers(ac: MiaFilterSelected) {

  }

  queryOptions(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryOptionsService(ac: MiaFilterSelected) {

  }

  queryOptionsCustom(ac: MiaFilterSelected) {
    this.execCustom.emit(ac);
  }

  onAddFilter(filter: MiaFilterType) {
    this.hasChange = true;
    this.actives.push({ andOrType: 0, field: filter, conditional: 0 });
    this.addFilterButton.closeMenu();
  }

  onChange() {
    this.hasChange = true;
  }

  onRemoveFilter(index: number) {
    this.hasChange = true;
    this.actives.splice(index, 1);
    if(this.actives.length == 1){
      this.actives[0].andOrType = 0;
    }
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.onApplyFilters();
  }

  closeAllMenuAndOr() {
    this.menuAndOr.forEach(t => t.closeMenu());
  }

  closeAllMenuConditional() {
    this.menuConditional.forEach(t => t.closeMenu());
  }



  onChangeFieldDateRange(select: MatSelectChange, field: MiaFilterType) {
    if(field.value.type == 1){
      this.filterByDay(field);
    } else if (field.value.type == 2) {
      this.filterByWeek(field);
    } else if (field.value.type == 3) {
      this.filterByMonth(field);
    } else if (field.value.type == 4) {
      this.filterByYear(field);
    }
    this.hasChange = true;
  }

  filterByDay(field: any) {
    this.onFilterRange(field, moment(), moment());
  }

  filterByWeek(field: any) {
    this.onFilterRange(field, moment().startOf('week'), moment().endOf('week'));
  }

  filterByMonth(field: any) {
    this.onFilterRange(field, moment().startOf('month'), moment().endOf('month'));
  }

  filterByYear(field: any) {
    this.onFilterRange(field, moment().startOf('year'), moment().endOf('year'));
  }

  onFilterRangeCustom(field: MiaFilterType) {
    if(this.range.value && this.range.value.start == undefined){
      field.value.rangeString = undefined;
      field.value.start = undefined;
      field.value.end = undefined;
      return;
    }
    
    this.onFilterRange(field, this.range.value.start, this.range.value.end);
  }

  onFilterRange(field: MiaFilterType, start: any, end: any) {
    field.value.rangeString = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD');
    field.value.start = start.format('YYYY-MM-DD');
    field.value.end = end.format('YYYY-MM-DD');
    //this.changeRange.emit({ start: start.format('YYYY-MM-DD'), end: end.format('YYYY-MM-DD')});
  }
}
