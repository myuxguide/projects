import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-forms',
  templateUrl: './simple-forms.component.html',
  styleUrls: ['./simple-forms.component.css']
})
export class SimpleFormsComponent implements OnInit {
  title:string="Simple Form in Angular"

  constructor() { }

  ngOnInit(): void {
  }

}
