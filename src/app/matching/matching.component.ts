import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html'
})
export class MatchingComponent {
    mode: number = 0;

    constructor() {
        let rawMode = localStorage.getItem("mode");
        if (rawMode !== null) {
            this.mode = parseInt(rawMode);
        }
    }
}
