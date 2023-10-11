import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GooglePlacesFieldComponent } from './fields/google-places-field/google-places-field.component';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';



@NgModule({
  declarations: [
    GooglePlacesFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGpAutocompleteModule,
    /** MATERIAL */
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    GooglePlacesFieldComponent,
    NgxGpAutocompleteModule,
  ]
})
export class MiaFormGooglePlacesFieldModule { }
