import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  // Simple String Interpolation
  title = 'Iterpolation Title'

  // Calculation Interpolation
  public calcs_A = 5
  public calcs_B = 4

  // Object Interpolation
  UserDetails={
    space: " ",
    firstName: "Jimish",
    lastName: "Shah",
    location: "Pune, Maharshtra",
    fullName: "Jimish Shah"
  }

  // Print Array
  arrayTest=[
    10,20,3,7,9
  ]


  constructor() { }

  ngOnInit(): void {
  }



}
