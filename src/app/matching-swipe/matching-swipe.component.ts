import { Component } from '@angular/core';
import { userList } from 'src/data/users';

@Component({
  selector: 'app-matching-swipe',
  templateUrl: './matching-swipe.component.html',
  styleUrls: ['./matching-swipe.component.css']
})
export class MatchingSwipeComponent {
  matches: [id: string];

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

    for (let i = 0; i < userList.length; i++) {
      if (userList[i].id == this.curMatch.id) {
        // If there is still at least one user, set it as the next match
        if (i + 1 < userList.length) {
          this.curMatch = userList[i+1];
          return;
        }
        // If the list is over, mark matches as over
        else {
          this.curMatch = null as any;
          return;
        }
      }
    }

    // If no match was found, use first match
    this.curMatch = userList[0];
    return;
  }

  constructor() {
    this.curMatch = {
      id: "sample",
      name: "Sample",
      age: 123,
      bio: "Sample bio",
      interests: "Sample interests",
      lookingfor: "Sample looking",
      pfp: "../assets/UserIcons/dhinesh24.png",
      imgs: [] as string[]
    };
    this.matches = [] as any;
    this.loadMatches();
    this.setNextMatch();
  }
}
