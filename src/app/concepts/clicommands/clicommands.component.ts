import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicommands',
  templateUrl: './clicommands.component.html',
  styleUrls: ['./clicommands.component.css']
})
export class CLIcommandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titles={
    titleCli : "Angular CLI"
  }

}
