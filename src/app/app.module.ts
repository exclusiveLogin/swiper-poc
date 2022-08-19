import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GalleryModule} from "gallery";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      GalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
