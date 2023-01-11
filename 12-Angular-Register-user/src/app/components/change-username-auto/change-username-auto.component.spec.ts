import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUsernameAutoComponent } from './change-username-auto.component';

describe('ChangeUsernameAutoComponent', () => {
  let component: ChangeUsernameAutoComponent;
  let fixture: ComponentFixture<ChangeUsernameAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUsernameAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUsernameAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
