import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  titles = {
    intro: "Introduction",
    titleComponent : "Forms",
    titleExample1: "Get the value on keyup(change)",
    titleExample2: "Get the value on keyup(change) onClick Button",
    titleExample3: "Get the value by getting name or placeholder",
    titleActions: "Submit",
    displayVal: '',
    displayValOnClick: '',
    displayPlaceHolderVal: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  getName(val:string){
    console.warn(val);
    this.titles.displayVal=val    
  }

  getNameOnClick(val:string){
    this.titles.displayValOnClick=val
  }
  
  getplaceHolderValue(val:any){
    this.titles.displayPlaceHolderVal=val
  }
}

