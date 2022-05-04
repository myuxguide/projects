import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  autoComplete=false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.autoComplete=false;
  }

  autocompleteData = [
    {
      "info":"Cras justo odio",
      "classes":"list-group-item",
      "icons": "fa fa-chevron-right"
    },
    {
      "info":"Dapibus ac facilisis in",
      "classes":"list-group-item",
      "icons": "fa fa-chevron-right"
    },
    {
      "info":"Vestibulum at eros",
      "classes":"list-group-item",
      "icons": "fa fa-chevron-right"
    }
  ]
}


