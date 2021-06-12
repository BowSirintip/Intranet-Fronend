import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTopicqaComponent } from './it-topicqa.component';

describe('ItTopicqaComponent', () => {
  let component: ItTopicqaComponent;
  let fixture: ComponentFixture<ItTopicqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTopicqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTopicqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
