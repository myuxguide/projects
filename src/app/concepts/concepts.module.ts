import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CLIcommandsComponent } from './clicommands/clicommands.component';
import { FunctionsComponent } from './functions/functions.component';
import { ActionsComponent } from './actions/actions.component';
import { EventsComponent } from './actions/events/events.component';
import { FormsComponent } from './actions/forms/forms.component';
import { CounterComponent } from './actions/counter/counter.component';
import { ArchitectureModule } from './architecture/architecture.module';
import { ConditionsComponent } from './conditions/conditions.component';
import { ApiCallComponent } from './api-call/api-call.component';

@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    FunctionsComponent,
    ActionsComponent,
    EventsComponent,
    FormsComponent,
    CounterComponent,
    ConditionsComponent,
    ApiCallComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ArchitectureModule
  ],
  exports: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    FunctionsComponent,
    EventsComponent,
    FormsComponent,
    CounterComponent
  ]
})
export class ConceptsModule { }
