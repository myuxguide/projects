import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormsComponent } from './simple-forms/simple-forms.component';


@NgModule({
  declarations: [
    SimpleFormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SimpleFormsComponent
  ]
})
export class ReactiveConceptsModule { }
