import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingConversationComponent } from './messaging-conversation.component';

describe('MessagingConversationComponent', () => {
  let component: MessagingConversationComponent;
  let fixture: ComponentFixture<MessagingConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
