import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  titles={
    pageTitle:"Angular 12",
    navConcepts:"Angular Concepts",
    navArchitecture: "Angular Architecture"
  }
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem("active")) {
      const youractivetbavariable = sessionStorage.getItem("active");
    }
  }

}
function constunloadNotification($event: any, any: any) {
  throw new Error('Function not implemented.');
}

