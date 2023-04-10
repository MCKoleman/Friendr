import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matching-matches',
  templateUrl: './matching-matches.component.html',
  styleUrls: ['./matching-matches.component.css']
})
export class MatchingMatchesComponent {
  @Input() matchIDs: string[];
  displayMatches: string[];

  getMatches() {
    let rawMatches = localStorage.getItem("matches");
    if (rawMatches != null) {
      this.matchIDs = JSON.parse(rawMatches);
    }
    this.displayMatches = this.matchIDs.reverse().slice(0, 6);
  }
  
  ngOnChanges() {
    this.displayMatches = this.matchIDs.reverse().slice(0, 6);
  }

  constructor() {
    this.matchIDs = [] as any;
    this.displayMatches = [] as any;
    this.getMatches();
  }
}
