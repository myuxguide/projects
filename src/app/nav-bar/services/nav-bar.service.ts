import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  url = "http://localhost:3000/navBarLists";

  constructor(private http: HttpClient) { }

  getNavBarData(){
    return this.http.get(this.url);
  }
}
