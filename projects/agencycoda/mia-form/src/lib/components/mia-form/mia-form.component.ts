import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaFormConfig } from '../../entities/mia-form-config';

@Component({
  selector: 'mia-form',
  templateUrl: './mia-form.component.html',
  styleUrls: ['./mia-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiaFormComponent implements OnInit, AfterViewInit {

  @Input() config = new MiaFormConfig();

  group: FormGroup = new FormGroup({});

  constructor(
    protected changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
     
  }

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  onSubmit() {
    console.log(this.group.value);
  }
}
