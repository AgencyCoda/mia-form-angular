import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'mia-filter-box',
  templateUrl: './mia-filter-box.component.html',
  styleUrls: ['./mia-filter-box.component.scss']
})
export class MiaFilterBoxComponent implements OnInit {

  @ViewChild('menuAndOr') menuAndOr!: MatMenuTrigger;

  actives: Array<any> = [];
  andOrType = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddFilter() {
    this.actives.push({ title: ''});
  }

  onRemoveFilter(index: number) {
    this.actives.splice(index, 1);
  }

  onClearFilters() {

  }

  onSelectAdd() {
    this.andOrType = 0;
    //this.menuAndOr.closeMenu();
  }

  onSelectOr() {
    this.andOrType = 1;
    //this.menuAndOr.closeMenu();
  }
}
