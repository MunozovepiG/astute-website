import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePageComponent } from './make-page.component';

describe('MakePageComponent', () => {
  let component: MakePageComponent;
  let fixture: ComponentFixture<MakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
