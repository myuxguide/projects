import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureComponent } from './architecture.component';
import { PropbindingComponent } from './propbinding/propbinding.component';


@NgModule({
  declarations: [
    ArchitectureComponent,
    PropbindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropbindingComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ArchitectureModule { }
