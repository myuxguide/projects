import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CLIcommandsComponent } from './clicommands/clicommands.component';
import { NgComponentComponent } from './ng-component/ng-component.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { FunctionsComponent } from './functions/functions.component';
import { ActionsComponent } from './actions/actions.component';
import { EventsComponent } from './actions/events/events.component';
import { FormsComponent } from './actions/forms/forms.component';
import { CounterComponent } from './actions/counter/counter.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent,
    FunctionsComponent,
    ActionsComponent,
    EventsComponent,
    FormsComponent,
    CounterComponent,
    PropertyBindingComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent,
    FunctionsComponent,
    EventsComponent,
    FormsComponent,
    CounterComponent,
    PropertyBindingComponent,
    ServicesComponent
  ]
})
export class ConceptsModule { }
