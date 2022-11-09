import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body1RegularComponent } from './body1-regular.component';

describe('Body1RegularComponent', () => {
  let component: Body1RegularComponent;
  let fixture: ComponentFixture<Body1RegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body1RegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body1RegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
