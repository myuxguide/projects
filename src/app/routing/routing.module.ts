import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingBasicsComponent } from './routing-basics/routing-basics.component';



@NgModule({
  declarations: [
    RoutingBasicsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoutingBasicsComponent
  ]
})
export class RoutingModule { }
