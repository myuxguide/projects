import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  titles={
    pageTitle: "Angular Architecture",
    component: "Components",
    module: "Modules",
    propBindings: "Property Bindings",
    services: "Services"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
