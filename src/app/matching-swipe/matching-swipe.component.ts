import { Component } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-swipe',
  templateUrl: './matching-swipe.component.html',
  styleUrls: ['./matching-swipe.component.css']
})
export class MatchingSwipeComponent {
  matches: [id: string];
  userList: any;

  curMatch: {
    id: string,
    name: string,
    age: number,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  }

  // Accept current match
  onAccept() {
    // Push new match to the match list
    this.loadMatches();
    this.matches.push(this.curMatch.id);
    localStorage.setItem("matches", JSON.stringify(this.matches));
    this.setNextMatch();
  }

  // Reject current match
  onReject() {
    this.loadMatches();
    this.setNextMatch();
  }

  // Loads matches from memory
  loadMatches() {
    // If matches are already stored, grab them
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      this.matches = JSON.parse(rawMatches);
    }
  }

  // Moves the selection to the next possible match
  setNextMatch() {
    // Don't move to next match if list is over
    if (this.curMatch == null) {
      return;
    }

    // Find the user after the current match
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id == this.curMatch.id) {
        // If there is still at least one user, set it as the next match
        // Don't match the same user again
        while (i + 1 < this.userList.length) {
          if (!this.matches.includes(this.userList[i + 1].id)) {
            this.curMatch = this.userList[i + 1];
            return;
          }
          i++;
        }
        // If the list is over, mark matches as over
        this.curMatch = null as any;
        return;
      }
    }

    // If the users after the current
    for (let i = 0; i < this.userList.length; i++) {
      if (!this.matches.includes(this.userList[i].id)) {
        this.curMatch = this.userList[i];
        return;
      }
    }
  }

  ngOnInit() {
    this.userList = new UserList().userList;
    this.curMatch = this.userList[0];
    this.matches = [] as any;
    this.loadMatches();
    this.setNextMatch();
  }

  constructor() {
    this.userList = new UserList().userList;
    this.curMatch = this.userList[0];
    this.matches = [] as any;
    this.loadMatches();
    this.setNextMatch();
  }
}
