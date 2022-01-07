import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressBlocksComponent } from './cypress-blocks.component';

describe('CypressBlocksComponent', () => {
  let component: CypressBlocksComponent;
  let fixture: ComponentFixture<CypressBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CypressBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CypressBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
