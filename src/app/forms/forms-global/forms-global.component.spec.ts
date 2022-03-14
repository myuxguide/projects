import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGlobalComponent } from './forms-global.component';

describe('FormsGlobalComponent', () => {
  let component: FormsGlobalComponent;
  let fixture: ComponentFixture<FormsGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
