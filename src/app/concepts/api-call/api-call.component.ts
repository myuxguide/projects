import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
  // tableHeadings ={
  //   id: "ID",
  //   name: "Name",
  //   age: "Age",
  //   email:"Email",
  //   location: "Location",
  //   state: "State",
  //   country: "Country"
  // }
  myUserHeadings: any
  myUsers: any
  
  constructor(private userData:UserDataService, private userDataHeading: UserDataService) {
    userDataHeading.userHeadings().subscribe((headingData)=>{
      this.myUserHeadings=headingData
    })
    
    userData.users().subscribe((data)=>{      
      this.myUsers=data       
    })    
  }

  ngOnInit(): void {
  }
}
