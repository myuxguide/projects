import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import ReactiveFormsModule for @angular/forms
import { ReactiveFormsModule } from '@angular/forms';

// Custom Form Components
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { SimpleFormsComponent } from './simple-forms/simple-forms.component';


@NgModule({
  declarations: [
    SimpleFormsComponent,
    FormValidationsComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    SimpleFormsComponent,
    FormValidationsComponent
  ]
})
export class ReactiveConceptsModule { }
