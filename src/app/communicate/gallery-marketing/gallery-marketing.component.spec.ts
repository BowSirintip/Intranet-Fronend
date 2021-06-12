import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMarketingComponent } from './gallery-marketing.component';

describe('GalleryMarketingComponent', () => {
  let component: GalleryMarketingComponent;
  let fixture: ComponentFixture<GalleryMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
