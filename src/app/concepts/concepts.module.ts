import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CLIcommandsComponent } from './clicommands/clicommands.component';
import { NgComponentComponent } from './ng-component/ng-component.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { FunctionsComponent } from './functions/functions.component';

@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent,
    FunctionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConceptsPagesComponent,
    CLIcommandsComponent,
    NgComponentComponent,
    NgModulesComponent
  ]
})
export class ConceptsModule { }
