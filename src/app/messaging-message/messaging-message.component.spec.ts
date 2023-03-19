import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingMessageComponent } from './messaging-message.component';

describe('MessagingMessageComponent', () => {
  let component: MessagingMessageComponent;
  let fixture: ComponentFixture<MessagingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
