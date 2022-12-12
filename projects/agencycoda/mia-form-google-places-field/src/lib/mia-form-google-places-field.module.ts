import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GooglePlacesFieldComponent } from './fields/google-places-field/google-places-field.component';



@NgModule({
  declarations: [
    GooglePlacesFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    /** MATERIAL */
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    GooglePlacesFieldComponent,
    GooglePlaceModule
  ]
})
export class MiaFormGooglePlacesFieldModule { }
