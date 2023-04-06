import { Component, OnInit } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent{

  userName = window.localStorage.getItem("name");
  userAge = window.localStorage.getItem("age");
  userBio = window.localStorage.getItem("bio");
  userInterests = window.localStorage.getItem("interests");
  userLooking = window.localStorage.getItem("looking");
  userProfile = window.localStorage.getItem("profile");

  getName(name:string) {
    console.warn(name);
    this.userName = name;
    window.localStorage.setItem("name", this.userName);
  }

  getAge(age:string) {
    console.warn(age);
    this.userAge = age;
    window.localStorage.setItem("age", this.userAge);
  }

  getBio(bio:string) {
    console.warn(bio);
    this.userBio = bio;
    window.localStorage.setItem("bio", this.userBio);
  }
  getInterests(interests:string) {
    console.warn(interests);
    this.userInterests = interests
    window.localStorage.setItem("interests", this.userInterests);
  }
  getLooking(looking:string) {
    console.warn(looking);
    this.userLooking = looking
    window.localStorage.setItem("looking", this.userLooking)
  }
  getProfile(profile:string) {
    console.warn(profile);
    this.userProfile = profile
    window.localStorage.setItem("profile", this.userProfile);
  }
}
