import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css']
})
export class NgForLoopComponent implements OnInit {
  colorName = [
    'Red',
    'Green',
    'Blue',
    'Grey',
    'Black',
    'Pink'
  ]

  employeeNames = [
    {
      firstName: 'Jimish',
      email: 'xyz@gmail.com',
      location: 'India'
    },
    {
      firstName: 'Prisha',
      email: 'abc@gmail.com',
      location: 'India'
    },
    {
      firstName: 'Kevin',
      email: 'tyx@gmail.com',
      location: 'India'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
