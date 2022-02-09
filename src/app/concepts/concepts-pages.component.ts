import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts-pages',
  templateUrl: './concepts-pages.component.html',
  styleUrls: ['./concepts-pages.component.css']
})
export class ConceptsPagesComponent implements OnInit {
  pageTitle: string = "Angular Concepts"
  pageSubTitle: string = "Interpolation"
  
  constructor() { }

  ngOnInit(): void {
  }

  titles = [
    {
      title: "Angular Concepts"
    }
  ]

}
