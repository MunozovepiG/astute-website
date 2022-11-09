import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderUpdatesComponent } from './founder-updates.component';

describe('FounderUpdatesComponent', () => {
  let component: FounderUpdatesComponent;
  let fixture: ComponentFixture<FounderUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
