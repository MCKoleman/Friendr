import { Component, Input } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-match',
  templateUrl: './matching-match.component.html',
  styleUrls: ['./matching-match.component.css']
})
export class MatchingMatchComponent {
  @Input() profileID: string;
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
  
  ngOnChanges() {
    let users = new UserList();
    this.profile = users.getUser(this.profileID);
  }

  constructor() {
    this.profileID = null as any;
    this.profile = null as any;
  }
}
