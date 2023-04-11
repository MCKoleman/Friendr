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
  messages: {
    time: string,
    day: string,
    month: string,
    year: string,
    message: string,
    self: boolean
  }[];
  visible = false;
  profileID: string = "";
  curTime: any;

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
    // Don't allow empty messages
    if (this.userMessageInput.trim() === "") {
      return;
    }

    // If this is the first message, start a new list
    if (this.messages == null) {
      this.messages = [];
    }

    // Get the 
    let time = new Date();
    let message = {
      time: time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0'),
      day: time.getDate().toString(),
      month: time.getMonth().toString(),
      year: time.getFullYear().toString(),
      message: this.userMessageInput,
      self: true
    };
    this.messages.push(message);
    this.userMessageInput = null as any;
    this.visible = !this.visible;

    // Store messages
    let rawMessages = localStorage.getItem("messages");
    let messageList = {} as any;
    if (rawMessages != null) {
      messageList = JSON.parse(rawMessages);
    }
    messageList[this.profileID] = this.messages;
    localStorage.setItem("messages", JSON.stringify(messageList));

    if (this.messages != null) {
      this.messages = this.messages.slice(this.messages.length - 7, this.messages.length);
    }
  }
  
  getMessages() {
    let rawMessages = localStorage.getItem("messages");
    if (rawMessages != null) {
      let messageList = JSON.parse(rawMessages);
      this.messages = messageList[this.profileID];
    }
    if (this.messages != null) {
      this.messages = this.messages.slice(this.messages.length - 7, this.messages.length);
    }
    console.log(this.messages);
  }

  getMatches() {
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      this.matches = JSON.parse(rawMatches);
    }
  }

  ngOnChanges() {
    this.curTime = new Date();
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
    this.curTime = new Date();
    this.getMatches();
  }
}
