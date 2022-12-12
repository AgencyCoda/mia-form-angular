import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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
