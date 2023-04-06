import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName = window.localStorage.getItem("name");
  userAge = window.localStorage.getItem("age");
  userBio = window.localStorage.getItem("bio");
  userInterests = window.localStorage.getItem("interests");
  userLooking = window.localStorage.getItem("looking");
}
