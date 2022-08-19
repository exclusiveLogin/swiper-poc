import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
      SwiperModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
