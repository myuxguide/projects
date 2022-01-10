import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormsComponent } from './simple-forms/simple-forms.component';

// import ReactiveFormsModule for @angular/forms
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SimpleFormsComponent    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SimpleFormsComponent
  ]
})
export class ReactiveConceptsModule { }
