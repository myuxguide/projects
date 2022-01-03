import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-events',
  templateUrl: './click-events.component.html',
  styleUrls: ['./click-events.component.css']
})
export class ClickEventsComponent implements OnInit {
  title= "Click Events"
  buttonName = "Click Me"

  constructor() { }

  ngOnInit(): void {
  }

  clickTrigger(btnName:any, btnName_two: any){

    alert(btnName); 
    alert(btnName_two); 
    // console.log(btnName);    
  }

}
