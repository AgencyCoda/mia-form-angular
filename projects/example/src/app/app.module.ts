import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaFormModule } from 'projects/agencycoda/mia-form/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ExampleCustomFieldComponent } from './fields/example-custom-field/example-custom-field.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
