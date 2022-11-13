import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMoneyComponent } from './your-money.component';

describe('YourMoneyComponent', () => {
  let component: YourMoneyComponent;
  let fixture: ComponentFixture<YourMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
