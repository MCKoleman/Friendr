import { Component } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-grid',
  templateUrl: './matching-grid.component.html',
  styleUrls: ['./matching-grid.component.css']
})
export class MatchingGridComponent {
  matches: [id: string];
  users: any;

  updateDisplay() {
    this.getMatches();
    let tempUsers = new UserList().userList;
    this.users = [] as any;

    // Only add users to the list that have not been matched with
    for (let i = 0; i < tempUsers.length; i++) {
      if (!this.matches.includes(tempUsers[i].id)) {
        this.users.push(tempUsers[i]);
      }
    }
  }

  getMatches() {
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches !== null) {
      this.matches = JSON.parse(rawMatches);
    }
  }

  ngOnChanges() {
    this.updateDisplay();
  }

  constructor() {
    this.matches = [] as any;
    this.users = new UserList().userList;
    this.updateDisplay();
  }
}
