import { Component, OnInit } from '@angular/core';
import { NavBarService } from './services/nav-bar.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navBarLists:any;

  constructor(private navs:NavBarService){}

  ngOnInit(): void {
    this.navs.getNavBarData().subscribe((navData)=>{
      this.navBarLists=navData        
    })

    if (sessionStorage.getItem("active")) {
      const youractivetbavariable = sessionStorage.getItem("active");
    }
  }
  navList:any;

  titles={
    pageTitle:"Angular 12",
    help:"Help",
    presentLink: "https://www.youtube.com/watch?v=wr7Okwfew-M&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C&index=48"
  }

}


