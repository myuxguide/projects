import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';



@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConceptsPagesComponent
  ]
})
export class ConceptsModule { }
