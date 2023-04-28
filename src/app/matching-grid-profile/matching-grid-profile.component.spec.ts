import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingGridProfileComponent } from './matching-grid-profile.component';

describe('MatchingGridProfileComponent', () => {
  let component: MatchingGridProfileComponent;
  let fixture: ComponentFixture<MatchingGridProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingGridProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingGridProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
