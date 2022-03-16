import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  apiUrlHeadings = "http://localhost:3000/userHeadings";
  apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  userHeadings(){
    return this.http.get(this.apiUrlHeadings)
  }

  users() {
    return this.http.get(this.apiUrl)
  }
}