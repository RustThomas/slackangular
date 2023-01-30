import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCanauxComponent } from './display-canaux.component';

describe('DisplayCanauxComponent', () => {
  let component: DisplayCanauxComponent;
  let fixture: ComponentFixture<DisplayCanauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCanauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCanauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
