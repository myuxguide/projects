import { Component, OnInit } from '@angular/core';

// import formbuilder
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-simple-forms',
  templateUrl: './simple-forms.component.html',
  styleUrls: ['./simple-forms.component.css']
})
export class SimpleFormsComponent implements OnInit {
  title: string = "Simple Form in Angular"
  userInfo: any;
  formValues: any
  nameVal = ""
  addrVal = ""

  // can take any property such as private or public in constructor parameter
  constructor(private myFormBuilder: FormBuilder) {
    this.userInfo = this.myFormBuilder.group({
      user: '',
      addr: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(myValues:any){
   console.warn("Form Submitted", myValues);
  }

  getValue(nameval:any, addrVal:any){
    this.nameVal = nameval;
    this.addrVal = addrVal;
  }

}
