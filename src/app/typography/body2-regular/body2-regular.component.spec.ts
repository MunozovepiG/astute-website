import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body2RegularComponent } from './body2-regular.component';

describe('Body2RegularComponent', () => {
  let component: Body2RegularComponent;
  let fixture: ComponentFixture<Body2RegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Body2RegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body2RegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
