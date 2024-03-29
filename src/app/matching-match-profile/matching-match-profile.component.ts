import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-match-profile',
  templateUrl: './matching-match-profile.component.html',
  styleUrls: ['./matching-match-profile.component.css']
})
export class MatchingMatchProfileComponent {
  @Input() profileID: string;
  profile: {
    id: string,
    name: string,
    age: number,
    gender: string,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  };
  url: string;
  gender = '';
  
  ngOnChanges() {
    let users = new UserList();
    this.profile = users.getUser(this.profileID);
    this.url = "./messages/" + this.profileID;
    this.gender = UserList.getGender(this.profile.gender);
  }

  constructor(private router : Router) {
    this.profileID = null as any;
    this.profile = null as any;
    this.url = null as any;
  }
}
