import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingMatchesComponent } from './matching-matches.component';

describe('MatchingMatchesComponent', () => {
  let component: MatchingMatchesComponent;
  let fixture: ComponentFixture<MatchingMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
