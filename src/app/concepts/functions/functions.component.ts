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

}
