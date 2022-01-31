import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  titles ={
    titleComponent: "Components",
    titleHeading: "About Component"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
