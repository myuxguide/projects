import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_12_training';
  

  constructor(private http:HttpClient  ,private userData: UserDataService) {
    console.warn("userData", userData.users());
  }

  users(){
    // return this.http.get();
  }

}
