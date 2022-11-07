import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body1BoldComponent } from './body1-bold.component';

describe('Body1BoldComponent', () => {
  let component: Body1BoldComponent;
  let fixture: ComponentFixture<Body1BoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body1BoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body1BoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
