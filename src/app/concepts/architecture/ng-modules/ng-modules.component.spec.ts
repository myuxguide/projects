import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulesComponent } from './ng-modules.component';

describe('NgModulesComponent', () => {
  let component: NgModulesComponent;
  let fixture: ComponentFixture<NgModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
