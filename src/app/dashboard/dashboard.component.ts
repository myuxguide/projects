import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  titles = {
    titleDashboard: 'Dashboard',
    titleFocus:'Needs to be Focus',
    titleAgenda: "Angular v12 Learning Agenda",
    titleFolderStructure: "Angular: Folder Structure",
    titleLinks: 'Suggested Links'
  }  

  constructor() {}

  ngOnInit(): void {}

}
