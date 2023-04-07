import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matching-match',
  templateUrl: './matching-match.component.html',
  styleUrls: ['./matching-match.component.css']
})
export class MatchingMatchComponent {
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
    this.profile = null as any;
  }
}
