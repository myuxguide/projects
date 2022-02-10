import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIcommandsComponent } from './clicommands.component';

describe('CLIcommandsComponent', () => {
  let component: CLIcommandsComponent;
  let fixture: ComponentFixture<CLIcommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLIcommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
