import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyFieldComponent } from './fields/currency-field/currency-field.component';



@NgModule({
  declarations: [
    CurrencyFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CurrencyMaskModule
  ],
  exports: [
    CurrencyFieldComponent    
  ]
})
export class MiaCurrencyFieldModule { }
