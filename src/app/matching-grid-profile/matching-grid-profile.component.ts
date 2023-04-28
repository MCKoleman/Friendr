import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-grid-profile',
  templateUrl: './matching-grid-profile.component.html',
  styleUrls: ['./matching-grid-profile.component.css']
})
export class MatchingGridProfileComponent {
  @Input() profile: {
    id: string,
    name: string,
    age: number,
    gender: string,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  }
  gender = '';
  @Output() matchEvent = new EventEmitter<string>();

  onAccept() {
    let matches = [];
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches !== null) {
      matches = JSON.parse(rawMatches);
    }
    matches.push(this.profile.id);
    localStorage.setItem("matches", JSON.stringify(matches));
    this.matchEvent.emit("");
  }

  ngOnChanges() {
    this.gender = UserList.getGender(this.profile.gender);
  }

  constructor() {
    this.profile = null as any;
  }
}
