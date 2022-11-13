import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatBlogsComponent } from './all-cat-blogs.component';

describe('AllCatBlogsComponent', () => {
  let component: AllCatBlogsComponent;
  let fixture: ComponentFixture<AllCatBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCatBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCatBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
