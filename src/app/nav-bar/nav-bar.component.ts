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
    navArchitecture: "Angular Architecture",
    help:"Help",
    // presentLink: "https://www.youtube.com/watch?v=rpl5yrt4nI4&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C&index=17&ab_channel=CodeStepByStep"
    presentLink: "https://www.youtube.com/watch?v=wr7Okwfew-M&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C&index=48"
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

