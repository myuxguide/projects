import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';



@NgModule({
  declarations: [
    InterpolationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InterpolationComponent
  ]
})
export class ConceptsModule { }
