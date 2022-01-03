import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTextBoxValComponent } from './get-text-box-val.component';

describe('GetTextBoxValComponent', () => {
  let component: GetTextBoxValComponent;
  let fixture: ComponentFixture<GetTextBoxValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTextBoxValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTextBoxValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
