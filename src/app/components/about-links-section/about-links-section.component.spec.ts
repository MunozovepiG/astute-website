import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLinksSectionComponent } from './about-links-section.component';

describe('AboutLinksSectionComponent', () => {
  let component: AboutLinksSectionComponent;
  let fixture: ComponentFixture<AboutLinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLinksSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutLinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
