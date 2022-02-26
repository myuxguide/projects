import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  titles = {
    titleConditions : "Conditions",
    conditions: "Select conditions",
    ifElse : "if...else condition",
    elseIfElse: "if...else...if...else condition",
    switchCase: "switch case",
    ngFor: "*ngFor",
    nestedLoop: "*Nested loop",
    syntax: "Syntax",
    link: "https://angular.io/api/common"
  }

  show=false

  constructor() { }

  ngOnInit(): void {
  }

}
