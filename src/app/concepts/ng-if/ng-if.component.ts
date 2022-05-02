import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  title:string = "*ngIf in Angular"
  showMe:boolean = true
  showMe2:boolean = true
  showMe3:boolean = true

  subTitle: any = "Youtube"
  name:string = "Google"
  

  constructor() { }

  ngOnInit(): void {
  }

}
