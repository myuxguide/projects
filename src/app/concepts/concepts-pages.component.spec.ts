import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsPagesComponent } from './concepts-pages.component';

describe('ConceptsPagesComponent', () => {
  let component: ConceptsPagesComponent;
  let fixture: ComponentFixture<ConceptsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
