import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClickEventsComponent } from './click-events/click-events.component';
import { GetTextBoxValComponent } from './get-text-box-val/get-text-box-val.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';

@NgModule({
  declarations: [
    InterpolationComponent,
    ClickEventsComponent,
    GetTextBoxValComponent,
    PropertyBindingComponent,
    PropertyBindingComponent,
    NgIfComponent,
    RoutingBasicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GetTextBoxValComponent,
    ClickEventsComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NgIfComponent,
    RoutingBasicsComponent
  ]
})
export class ConceptsModule {}