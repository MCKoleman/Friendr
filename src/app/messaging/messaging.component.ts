import { Component } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  userMessage = window.localStorage.getItem("message");
  showMore:boolean = true;
  visible:boolean = false;
  Message() {
    this.showMore = !this.showMore;
    this.visible = !this.visible;
  }
  
  getMessage(message:string) {
    console.warn(message);
    this.userMessage = message;
    window.localStorage.setItem("message", this.userMessage);
  }
}
