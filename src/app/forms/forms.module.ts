import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsGlobalComponent } from './forms-global/forms-global.component';



@NgModule({
  declarations: [
    FormsGlobalComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormsGlobalComponent
  ]
})
export class FormsModule { }
