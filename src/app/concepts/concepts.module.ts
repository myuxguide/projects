import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsPagesComponent } from './concepts-pages.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CLIcommandsComponent } from './clicommands/clicommands.component';
import { NgComponentComponent } from './ng-component/ng-component.component';

@NgModule({
  declarations: [
    ConceptsPagesComponent,
    InterpolationComponent,
    CLIcommandsComponent,
    NgComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConceptsPagesComponent,
    CLIcommandsComponent,
    NgComponentComponent

  ]
})
export class ConceptsModule { }
