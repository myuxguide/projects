import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConceptsService {
  apiConcept = "http://localhost:3000/conceptTitles"

  constructor(private http: HttpClient) {}

  getConceptNavBar(){
    return this.http.get(this.apiConcept);
  }
}
