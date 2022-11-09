import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body3RegularComponent } from './body3-regular.component';

describe('Body3RegularComponent', () => {
  let component: Body3RegularComponent;
  let fixture: ComponentFixture<Body3RegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body3RegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body3RegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
