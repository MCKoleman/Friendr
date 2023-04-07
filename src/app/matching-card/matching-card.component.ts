import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matching-card',
  templateUrl: './matching-card.component.html',
  styleUrls: ['./matching-card.component.css']
})
export class MatchingCardComponent {
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
  
  constructor() {
    this.profile = {
      id: "sample",
      name: "Sample",
      age: 123,
      bio: "Sample bio",
      interests: "Sample interests",
      lookingfor: "Sample looking",
      pfp: "../assets/UserIcons/dhinesh24.png",
      imgs: [] as string[]
    };
  }
}
