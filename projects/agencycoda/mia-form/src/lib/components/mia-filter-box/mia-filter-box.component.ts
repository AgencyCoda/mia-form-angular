import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MiaFilterBoxConfig } from '../../entities/mia-filter-box-config';
import { MiaFilterType } from '../../entities/mia-filter-type';

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
  /**
   * andOrType: 0 = AND, 1 = OR
   * conditional: 0 = Is, 1 = Is not, 2 = Is set (Si tiene valor), 3 = Is not Set (si no tiene valor)
   * 
   */
  actives: Array<{ andOrType: number, field?: MiaFilterType, conditional: number }> = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  onApplyFilters() {
    console.log(this.actives);
  }

  onAddFilter(filter: MiaFilterType) {
    this.actives.push({ andOrType: 0, field: filter, conditional: 0 });
    this.addFilterButton.closeMenu();
  }

  onRemoveFilter(index: number) {
    this.actives.splice(index, 1);
    if(this.actives.length == 1){
      this.actives[0].andOrType = 0;
    }
  }

  onClearFilters() {

  }

  closeAllMenuAndOr() {
    this.menuAndOr.forEach(t => t.closeMenu());
  }

  closeAllMenuConditional() {
    this.menuConditional.forEach(t => t.closeMenu());
  }
}
