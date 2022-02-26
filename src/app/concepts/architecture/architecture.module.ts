import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureComponent } from './architecture.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ServicesComponent } from './services/services.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { NgComponentComponent } from './ng-component/ng-component.component';

@NgModule({
  declarations: [
    ArchitectureComponent,
    NgComponentComponent,
    NgModulesComponent,
    PropertyBindingComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArchitectureComponent,
    NgModulesComponent,
    NgModulesComponent,
    PropertyBindingComponent,
    ServicesComponent
  ]
})
export class ArchitectureModule { }
