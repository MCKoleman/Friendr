import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingGridComponent } from './matching-grid.component';

describe('MatchingGridComponent', () => {
  let component: MatchingGridComponent;
  let fixture: ComponentFixture<MatchingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
