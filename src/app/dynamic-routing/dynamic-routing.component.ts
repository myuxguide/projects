import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  templateUrl: './dynamic-routing.component.html',
  styleUrls: ['./dynamic-routing.component.css']
})
export class DynamicRoutingComponent implements OnInit {
  title: string = "Dynamic Routing"
  userID: any
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
  }

}
