import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching-grid',
  templateUrl: './matching-grid.component.html',
  styleUrls: ['./matching-grid.component.css']
})
export class MatchingGridComponent implements OnInit {
  page = {
    title: "Matching",
    subtitle: "Start matching!",
    content: ""
  }

  constructor() {}
  ngOnInit() {}
}
