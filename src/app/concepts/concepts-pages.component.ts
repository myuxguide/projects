import { Component, OnInit } from '@angular/core';
import { ConceptsService } from './services/concepts.service';


@Component({
  selector: 'app-concepts-pages',
  templateUrl: './concepts-pages.component.html',
  styleUrls: ['./concepts-pages.component.css']
})

export class ConceptsPagesComponent implements OnInit {
  pageTitle : any = "Angular Concepts"
  conceptNavs:any;
  
  constructor(private conceptNav: ConceptsService) {      
  }

  ngOnInit(): void {
    console.warn(conceptNavData);
    
    this.conceptNav.getConceptNavBar().subscribe((conceptNavData)=>{
      this.conceptNavs=conceptNavData;
  });

  

  

  }
}

function conceptNavData(conceptNavData: any) {
  throw new Error('Function not implemented.');
}
