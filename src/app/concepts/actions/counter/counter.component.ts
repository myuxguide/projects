import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number = 0

  titles={
    intro:"Introduction",
    titleCounter: "Counter",
    titleExample1:"Counter Example 1"    
  }
  constructor() { }

  ngOnInit(): void {
  }

  counter(type:string){
    type==="add" ?this.count++:this.count--;
  }

}
