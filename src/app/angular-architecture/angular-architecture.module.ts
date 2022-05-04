import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { TabledataComponent } from './components/tabledata/tabledata.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    AutocompleteComponent,
    TabledataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class AngularArchitectureModule { }
