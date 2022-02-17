import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts-pages',
  templateUrl: './concepts-pages.component.html',
  styleUrls: ['./concepts-pages.component.css']
})
export class ConceptsPagesComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }

  // Object Interpolation
  titles ={
    pageTitle : "Angular Concepts",
    interpolate: "Interpolation",
    cli: "Angular CLI",
    component: "Components",
    module: "Modules",
    function: "Functions",
    actions: "Actions",
    forms: "Forms",
    counter: "Counters",
    propBindings: "Property Binding",
    services: "Services"
  }

}
