import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProgresscardComponent } from './progresscard/progresscard.component';




@NgModule({
  declarations: [
    ProgresscardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardRoutingModule,
    ProgresscardComponent
  ]
})
export class DashboardModule { }
