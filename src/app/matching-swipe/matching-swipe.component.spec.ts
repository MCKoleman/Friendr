import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingSwipeComponent } from './matching-swipe.component';

describe('MatchingSwipeComponent', () => {
  let component: MatchingSwipeComponent;
  let fixture: ComponentFixture<MatchingSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingSwipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
