import { Component, OnInit } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent{

  userName = localStorage.getItem("name");
  userAge = localStorage.getItem("age");
  userBio = localStorage.getItem("bio");
  userInterests = localStorage.getItem("interests");
  userLooking = localStorage.getItem("looking");
  userProfile = localStorage.getItem("profile");

  getName(name:string) {
    console.warn(name);
    this.userName = name;
    localStorage.setItem("name", this.userName);
  }

  getAge(age:string) {
    console.warn(age);
    this.userAge = age;
    localStorage.setItem("age", this.userAge);
  }

  getBio(bio:string) {
    console.warn(bio);
    this.userBio = bio;
    localStorage.setItem("bio", this.userBio);
  }
  getInterests(interests:string) {
    console.warn(interests);
    this.userInterests = interests
    localStorage.setItem("interests", this.userInterests);
  }
  getLooking(looking:string) {
    console.warn(looking);
    this.userLooking = looking
    localStorage.setItem("looking", this.userLooking)
  }
  getProfile(profile:string) {
    console.warn(profile);
    this.userProfile = profile
    localStorage.setItem("profile", this.userProfile);
  }
}
