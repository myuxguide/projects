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

  // Alert Event
  getAlertData(){
    alert("Function Called...");    
  }

  // getKeypressData
  getKeypressData(val:string){
    console.warn(val);
  }

  // getBlurData
  getBlurData(val:string){
    console.warn(val);    
  }

  // getInputData
  getInputData(val:string){
    console.warn(val);    
  }

  // getMouseOverData
  getMouseOverData(val:string){
    console.warn(val);    
  }

}
