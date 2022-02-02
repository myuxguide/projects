import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveConceptsModule } from './reactiveConcepts/reactive-concepts.module';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClickEventsComponent } from './click-events/click-events.component';
import { GetTextBoxValComponent } from './get-text-box-val/get-text-box-val.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { CliComponent } from './cli/cli.component';
import { ModuleComponent } from './module/module.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    InterpolationComponent,
    ClickEventsComponent,
    GetTextBoxValComponent,
    PropertyBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForLoopComponent,
    CliComponent,
    ModuleComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveConceptsModule
  ],
  exports:[
    InterpolationComponent,
    ClickEventsComponent,
    GetTextBoxValComponent,
    PropertyBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForLoopComponent,
    CliComponent,
    ModuleComponent,
    CounterComponent
  ]
})
export class ConceptsModule {}