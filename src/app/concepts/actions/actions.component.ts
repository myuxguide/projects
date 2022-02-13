import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  titles={
    intro: "Introduction",
    titleComponent: "Actions [Events | blur | Keyup | keyDown...]",
    titleExample: "Examples",
    titleActions: "Call Function Example"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
