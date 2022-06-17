import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgSliderRoutingModule } from './img-slider-routing.module';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';


@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent,
    ImgSlideComponent
  ],
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ]
})
export class ImgSliderModule { }
