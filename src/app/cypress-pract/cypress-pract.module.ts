import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CypressBlocksComponent } from './cypress-blocks/cypress-blocks.component';


@NgModule({
  declarations: [
    CypressBlocksComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CypressBlocksComponent
  ]
})
export class CypressPractModule { }
