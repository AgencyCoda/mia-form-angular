import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaFormModule } from 'projects/agencycoda/mia-form/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
