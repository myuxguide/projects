import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-global',
  templateUrl: './forms-global.component.html',
  styleUrls: ['./forms-global.component.css']
})
export class FormsGlobalComponent implements OnInit {
  titles = {
    titleForms : "Forms",
    syntax: "Syntax"
  }

  userData:any={}
  constructor() { }

  ngOnInit(): void {
  }

  getData(myData:NgForm){
    console.log(myData);
    this.userData=myData
    
  }

}
