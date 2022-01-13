import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titles = {
    title: 'BhoooBhoooooom',
    subTitle:'Needs to be Focus',
    titleOne: "Angular v12 Learning Agenda",
    titleTwo: "Angular: Folder Structure",
    titleThree: "Angular Folder: Advanced user",
    titleFour: 'Suggested Links'
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
