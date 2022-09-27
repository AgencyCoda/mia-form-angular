import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PhoneFieldComponent } from './fields/phone-field/phone-field.component';


@NgModule({
  declarations: [
    PhoneFieldComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  exports: [
    PhoneFieldComponent
  ]
})
export class MiaPhoneFieldModule { }
