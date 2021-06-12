import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarTopicComponent } from './seminar-topic.component';

describe('SeminarTopicComponent', () => {
  let component: SeminarTopicComponent;
  let fixture: ComponentFixture<SeminarTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
