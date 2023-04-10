import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName = localStorage.getItem("name");
  userAge = localStorage.getItem("age");
  userBio = localStorage.getItem("bio");
  userInterests = localStorage.getItem("interests");
  userLooking = localStorage.getItem("looking");
}
