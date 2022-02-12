import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  titles={
    intro: "Introduction",
    titleComponent: "Function"
  }
  constructor() { }

  ngOnInit(): void {
  }

  // simple method
  getName(){
    alert("Function Called...")
  }

  // parameter function
  getNameTwo(name:string){
    alert("Function Name Called...")
  }

  getNumberThree(name:number){
    alert("Function Number Called...")
  }

  getMultipleParam(name:string, secondName:string){
    alert(name)
    alert(secondName)
  }

}
