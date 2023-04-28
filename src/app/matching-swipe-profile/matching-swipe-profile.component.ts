import { Component, Input } from '@angular/core';
import { UserList } from 'src/data/users';

@Component({
  selector: 'app-matching-swipe-profile',
  templateUrl: './matching-swipe-profile.component.html',
  styleUrls: ['./matching-swipe-profile.component.css']
})
export class MatchingSwipeProfileComponent {
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
  
  ngOnChanges() {
    this.gender = UserList.getGender(this.profile.gender);
  }

  constructor() {
    this.profile = null as any;
  }
}
