import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  // myColor: string = "Red"
  myColor: string = "Green"
  // myColor: string = "Blue"

  constructor() { }

  ngOnInit(): void {
  }

}
