import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingMatchComponent } from './matching-match.component';

describe('MatchingMatchComponent', () => {
  let component: MatchingMatchComponent;
  let fixture: ComponentFixture<MatchingMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
