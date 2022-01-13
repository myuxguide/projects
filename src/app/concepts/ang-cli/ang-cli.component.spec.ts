import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCLIComponent } from './ang-cli.component';

describe('AngCLIComponent', () => {
  let component: AngCLIComponent;
  let fixture: ComponentFixture<AngCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngCLIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
