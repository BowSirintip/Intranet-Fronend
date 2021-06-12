import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCommuComponent } from './download-commu.component';

describe('DownloadCommuComponent', () => {
  let component: DownloadCommuComponent;
  let fixture: ComponentFixture<DownloadCommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
