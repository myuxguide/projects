import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsModule } from './actions/events/events.module'
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CLIcommandsComponent } from './clicommands/clicommands.component';
import { NgComponentComponent } from './ng-component/ng-component.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { FunctionsComponent } from './functions/functions.component';
import { ActionsComponent } from './actions/actions.component';
import { FormsComponent } from './actions/forms/forms.component';

@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent,
    FunctionsComponent,
    ActionsComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    EventsModule
  ],
  exports: [
    ConceptsPagesComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent,
    FormsComponent
  ]
})
export class ConceptsModule { }
