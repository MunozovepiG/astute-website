import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundButtonDefaultComponent } from './round-button-default.component';

describe('RoundButtonDefaultComponent', () => {
  let component: RoundButtonDefaultComponent;
  let fixture: ComponentFixture<RoundButtonDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundButtonDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundButtonDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
