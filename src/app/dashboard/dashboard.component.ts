import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string = 'Dashboard'
  subTitleOne: string = "Angular-12 Learning Agenda"
  subTitleTwo: string = 'Suggested Links'

  constructor() { }

  ngOnInit(): void {
  }

}
