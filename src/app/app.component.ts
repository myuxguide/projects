import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Component';

  navLists=[
    {
      "id": "main_nav",
      "labels":"Home",
      "classes":"nav-item",
      "linkClass":"dropdown-item text-white",
      "iconClass":"fa fa-solid fa-home",
      "routes":"dashboard"
    },
    {
      "id": "components",
      "labels":"Components",
      "classes":"nav-item",
      "linkClass":"dropdown-item text-white",
      "iconClass":"fa fa-solid fa-list-alt",
      "routes":"dashboard"
    }
  ]
}
