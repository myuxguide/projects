import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name: string = "Peter"
  disable: boolean = false
  names: any

  titles={
    propBindings: "Property Binding",
    interpolation: "Interpolation",
    twoWayBindings:"2-Way Binding"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
