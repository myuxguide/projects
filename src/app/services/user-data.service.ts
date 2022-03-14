import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      {
        name:'Jimish',
        age: 28,
        email: 'jimish@test.com'
      },
      {
        name:'Prisha',
        age: 15,
        email: 'prisha@test.com'
      },
      {
        name:'Rupal',
        age: 29,
        email: 'rupal@test.com'
      }
    ]
  }

}
