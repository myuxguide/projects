import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titles = {
    title: 'Dashboard',
    titleOne: "Angular-12 Learning Agenda",
    titleTwo: "Angular Folder: Structure beginners",
    titleThree: "Angular Folder: Advanced user",
    titleFour: 'Suggested Links'
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
