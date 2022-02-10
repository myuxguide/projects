import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  title = "Interpolation"
  titles = {
    titleInterploation: "Interpolation"
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
