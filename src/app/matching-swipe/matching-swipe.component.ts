import { Component } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-swipe',
  templateUrl: './matching-swipe.component.html',
  styleUrls: ['./matching-swipe.component.css']
})
export class MatchingSwipeComponent {
  matches: [id: string];
  rejects: [id: string];
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
    this.rejects.push(this.curMatch.id);
    localStorage.setItem("rejects", JSON.stringify(this.rejects));
    this.setNextMatch();
  }

  // Loads matches from memory
  loadMatches() {
    // If matches are already stored, grab them
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      this.matches = JSON.parse(rawMatches);
    }
    let rawRejects = localStorage.getItem("rejects");
    if (rawRejects != null) {
      this.rejects = JSON.parse(rawRejects);
    }
  }

  // Moves the selection to the next possible match
  setNextMatch() {
    // Don't move to next match if list is over
    if (this.curMatch == null) {
      return;
    }
    // Forcefully loads matches
    this.loadMatches();

    // Find the user after the current match
    for (let i = 0; i < this.userList.length; i++) {
      if (!this.matches.includes(this.userList[i].id) 
      && !this.rejects.includes(this.userList[i].id)) {
        this.curMatch = this.userList[i];
        return;
      }
    }
    this.curMatch = null as any;
    return;
  }

  ngOnInit() {
    this.userList = new UserList().userList;
    this.curMatch = this.userList[0];
    this.matches = [] as any;
    this.rejects = [] as any;
    this.setNextMatch();
  }

  constructor() {
    this.userList = new UserList().userList;
    this.curMatch = this.userList[0];
    this.matches = [] as any;
    this.rejects = [] as any;
    this.setNextMatch();
  }
}
