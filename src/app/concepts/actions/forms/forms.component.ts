import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  titles={
    intro: "Introduction",
    titleComponent: "Angular Forms",
    titleExample: "Example",
    titleActions: "Submit"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
