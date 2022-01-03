import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClickEventsComponent } from './click-events/click-events.component';
import { GetTextBoxValComponent } from './get-text-box-val/get-text-box-val.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InterpolationComponent,
    ClickEventsComponent,
    GetTextBoxValComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GetTextBoxValComponent,
    ClickEventsComponent,
    InterpolationComponent
  ]
})
export class ConceptsModule {}