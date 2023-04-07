import { Component, Input } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-matches',
  templateUrl: './matching-matches.component.html',
  styleUrls: ['./matching-matches.component.css']
})
export class MatchingMatchesComponent {
  @Input() matchIDs: string[];
  matches: {
    id: string,
    name: string,
    age: number,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  }[]
  userList: any;

  getMatches() {
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      let matchIDs = JSON.parse(rawMatches);
      this.matches = [] as any;

      // Load matches from IDs
      for (let i = 0; i < matchIDs.length; i++) {
        let user = this.userList.getUser(matchIDs[i]);
        if (user != null) {
          this.matches.push(user);
          if (this.matches.length >= 6) {
            return;
          }
        }
      }
    }
  }
  
  ngOnChanges() {
    this.getMatches();
  }

  constructor() {
    this.userList = new UserList();
    this.matches = [] as any;
    this.matchIDs = [] as any;
    this.getMatches();
  }
}
