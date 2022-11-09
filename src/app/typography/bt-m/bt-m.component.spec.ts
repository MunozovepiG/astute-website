import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtMComponent } from './bt-m.component';

describe('BtMComponent', () => {
  let component: BtMComponent;
  let fixture: ComponentFixture<BtMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
