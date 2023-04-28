import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingSwipeProfileComponent } from './matching-swipe-profile.component';

describe('MatchingSwipeProfileComponent', () => {
  let component: MatchingSwipeProfileComponent;
  let fixture: ComponentFixture<MatchingSwipeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingSwipeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingSwipeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
