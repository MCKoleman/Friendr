import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matching-matches',
  templateUrl: './matching-matches.component.html',
  styleUrls: ['./matching-matches.component.css']
})
export class MatchingMatchesComponent {
  @Input() matches: {
    id: string,
    name: string,
    age: number,
    bio: string,
    interests: string,
    lookingfor: string,
    pfp: string,
    imgs: string[]
  }[]
  
  constructor() {
    this.matches = [{
      id: "sample",
      name: "Sample",
      age: 123,
      bio: "Sample bio",
      interests: "Sample interests",
      lookingfor: "Sample looking",
      pfp: "../assets/UserIcons/dhinesh24.png",
      imgs: [] as string[]
    }];
  }
}
