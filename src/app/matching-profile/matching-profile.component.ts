import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-matching-profile',
  templateUrl: './matching-profile.component.html',
  styleUrls: ['./matching-profile.component.css']
})
export class MatchingProfileComponent {
  @Input() profile: {
    id: string,
    name: string,
    age: number,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  }
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

  constructor() {
    this.profile = null as any;
  }
}
