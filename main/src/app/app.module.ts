import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeModule } from "angular-lib/dist/date-time";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DateTimeModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
