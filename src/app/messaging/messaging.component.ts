import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  userMessage = window.localStorage.getItem("message");
  showMore:boolean = true;
  visible:boolean = false;
  profileID: string = "9a660cf49a8f94bc";

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

  constructor(private route: ActivatedRoute) {
    this.profile = null as any;
  }

  Message() {
    this.showMore = !this.showMore;
    this.visible = !this.visible;
  }
  
  getMessage(message:string) {
    console.warn(message);
    this.userMessage = message;
    window.localStorage.setItem("message", this.userMessage);
  }



  ngOnInit() {
    let users = new UserList;
    this.route.paramMap.subscribe(params => {
       this.profileID = decodeURIComponent(params.get('profileID') as string);
    }) 
    // this.profile = users.getUser(this.profileID);
    // console.log(this.profile.name);
    this.loadMessageProfile(this.profileID, users);
  }

  loadMessageProfile(profileID: string, users: UserList) {
    this.profile = users.getUser(this.profileID);
  }
}
