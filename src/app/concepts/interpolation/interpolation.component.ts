import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  // Simple String Interpolation
  title = 'iterpolation'

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
    10,20,3,7,9,"String Value"
  ]

  // Interpolation using mehtod/function
  getValue(){
    let getText= "I am Interpolation called by Function"

    return getText
  }

  // Check typs of Datatype
  checkDataType = 100

  constructor() { }

  ngOnInit(): void {
  }



}
