import { Component, OnInit } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  titles ={
    titleComponent: "Components"
  }

  componentLists=[
    {
      "id":"v-pills-autocomplete-autocomplete",
      "label":"AutoComplete",
      "class":"nav-link active",
      "links":"#v-pills-autocomplete",
      "controls":"v-pills-autocomplete"
    },
    {
      "id":"v-pills-profile-table",
      "label":"Table Data",
      "class":"nav-link",
      "links":"#v-pills-tableData",
      "controls":"v-pills-table"
    }
  ]

  tabsContents=[
    {
      "id":"v-pills-autocomplete",
      "classes":"app-autocomplete",
      "selector" : "autocomplete"
    },
    {
      "id":"v-pills-tableData",
      "classes":"tab-pane fade",
      "selector" : "tableData"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
