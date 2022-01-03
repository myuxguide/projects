import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-get-text-box-val',
  templateUrl: './get-text-box-val.component.html',
  styleUrls: ['./get-text-box-val.component.css']
})
export class GetTextBoxValComponent implements OnInit {
  currentVal = "";
  btnName = "Get Value";

  constructor() { }

  ngOnInit(): void {
  }

  getVal(val:any){
    console.warn(val);
    this.currentVal = val;
  }

}