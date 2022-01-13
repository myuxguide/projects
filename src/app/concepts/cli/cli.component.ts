import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent implements OnInit {
  title:string = "Angular CLI &amp; Important Command(s)"

  constructor() { }

  ngOnInit(): void {
  }

}
