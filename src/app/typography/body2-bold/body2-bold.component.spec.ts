import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body2BoldComponent } from './body2-bold.component';

describe('Body2BoldComponent', () => {
  let component: Body2BoldComponent;
  let fixture: ComponentFixture<Body2BoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body2BoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body2BoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
