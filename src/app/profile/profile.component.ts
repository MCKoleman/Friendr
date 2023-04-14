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

  editInterests = false;
  editLooking = false;
  editBio = false;
  editName = false;
  editAge = false;

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

  
  // getProfile(profile:string) {
  //   console.warn(profile);
  //   this.userProfile = profile
  //   localStorage.setItem("profile", this.userProfile);
  // }
}
