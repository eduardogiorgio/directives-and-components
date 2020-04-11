import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola.component';

import { ResaltarDirective } from './resaltar.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HolaComponent, ResaltarDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
