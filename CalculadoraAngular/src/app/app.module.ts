import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraItemComponent } from './calculadora-item/calculadora-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
