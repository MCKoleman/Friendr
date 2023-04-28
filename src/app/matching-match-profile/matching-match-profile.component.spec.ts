import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingMatchProfileComponent } from './matching-match-profile.component';

describe('MatchingMatchProfileComponent', () => {
  let component: MatchingMatchProfileComponent;
  let fixture: ComponentFixture<MatchingMatchProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingMatchProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingMatchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
