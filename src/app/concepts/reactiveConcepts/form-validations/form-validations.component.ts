import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {
  title: string = "Angular Form Validations"
  userInfo:any
  nameVal = ['', Validators.required]
  addrVal = ['', Validators.required, Validators.minLength(5)]

  constructor(private myFormBuilder: FormBuilder) {
    this.userInfo = this.myFormBuilder.group({
      user:'',
      addr:''
    })
  }

  ngOnInit(): void {}

  OnSubmit(myValues: any){
    console.warn("Form Submitted", myValues);
  }

  getValue(nameVal:any, addrVal:any){
    this.nameVal = nameVal
    this.addrVal = addrVal
  }

}
