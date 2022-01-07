import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  title: string = "Property Binding"
  disableTextBox = false

  public show:boolean = false
  public buttonName:string = "Show"

  showInfo:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  btnToggle(){
    this.show = !this.show
    this.showInfo = !this.showInfo

    if(this.show)
    {
      this.buttonName = "Hide";
      
    }else
      this.buttonName = "Show";      
    }
  }