import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalPageLinkComponent } from './internal-page-link.component';

describe('InternalPageLinkComponent', () => {
  let component: InternalPageLinkComponent;
  let fixture: ComponentFixture<InternalPageLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalPageLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalPageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
