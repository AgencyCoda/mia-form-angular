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
    QuillModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MIA_GOOGLE_STORAGE_PROVIDER,
      useValue: {
        bucket: 'yoypr-files'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
