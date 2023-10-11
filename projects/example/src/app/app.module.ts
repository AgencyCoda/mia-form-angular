import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaFormModule } from 'projects/agencycoda/mia-form/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ExampleCustomFieldComponent } from './fields/example-custom-field/example-custom-field.component';
import { MIA_GOOGLE_STORAGE_PROVIDER } from '@agencycoda/mia-core';
import { MatButtonModule } from '@angular/material/button';
import { MiaFormGooglePlacesFieldModule } from 'projects/agencycoda/mia-form-google-places-field/src/public-api';
import { MiaPhoneFieldModule } from 'projects/agencycoda/mia-phone-field/src/public-api';
import { MiaCurrencyFieldModule } from 'projects/agencycoda/mia-currency-field/src/public-api';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';

@NgModule({
  declarations: [
    AppComponent,
    ExampleCustomFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MiaFormModule,
    MiaFormGooglePlacesFieldModule,
    NgxGpAutocompleteModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MiaPhoneFieldModule,
    MiaCurrencyFieldModule
  ],
  providers: [
    {
      provide: MIA_GOOGLE_STORAGE_PROVIDER,
      useValue: {
        bucket: 'yoypr-files'
      }
    },
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'putYourApiKeyHere',
        libraries: ['places']
      })
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
