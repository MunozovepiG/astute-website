import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subheading1Component } from './subheading1.component';

describe('Subheading1Component', () => {
  let component: Subheading1Component;
  let fixture: ComponentFixture<Subheading1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subheading1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subheading1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
