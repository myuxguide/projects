import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  titles={
    titleEvents: "Events Examples"
  }

  constructor() { }

  ngOnInit(): void {
  }

  // Event Example
  getData(){
    console.warn("Function Called...");
    
  }

}
