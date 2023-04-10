import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  userMessageInput: string;
  messages: string[];
  visible = false;
  profileID: string = "";

  profile: {
    id: string,
    name: string,
    age: number,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  };
  matches: [id: string];

  sendMessage() {
    this.messages.push(this.userMessageInput);
    this.userMessageInput = null as any;
    this.visible = !this.visible;
    localStorage.setItem("messages", JSON.stringify(this.messages));
    this.messages = this.messages.slice(this.messages.length - 7, this.messages.length);
  }
  
  getMessages() {
    let rawMessages = localStorage.getItem("messages");
    if (rawMessages !== null) {
      this.messages = JSON.parse(rawMessages);
    }
    this.messages = this.messages.slice(this.messages.length - 7, this.messages.length);
  }

  getMatches() {
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      this.matches = JSON.parse(rawMatches);
    }
  }

  ngOnChanges() {

  }

  ngOnInit() {
    let users = new UserList;
    this.route.paramMap.subscribe(params => {
      this.profileID = decodeURIComponent(params.get('profileID') as string);
    });

    // If loading in without specifying the user, select first match
    this.getMessages();
    this.getMatches();
    if (this.matches == null) {
      this.profile = null as any;
    }
    // If user is invalid, navigate to proper tab
    else if (this.profileID == null || this.profileID === "null") {
      window.location.href = "/messages/" + this.matches[0];
    }
    // Only load user if it is not invalid
    else {
      this.profile = users.getUser(this.profileID);
    }
  }

  constructor(private route: ActivatedRoute) {
    this.profile = null as any;
    this.matches = null as any;
    this.userMessageInput = null as any;
    this.messages = [];
    this.getMatches();
  }
}
