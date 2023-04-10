import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  onClearData() {
    localStorage.removeItem("matches");
    localStorage.removeItem("rejects");
    window.location.reload();
    window.scroll(0, 0);
  }

  swapMode() {
    let mode = 0;
    let rawMode = localStorage.getItem("mode");
    if (rawMode !== null) {
      mode = parseInt(rawMode);
    }

    // Swap the mode of the app
    mode = (mode + 1) % 2;
    localStorage.setItem("mode", mode.toString());
    window.location.reload();
    window.scroll(0, 0);
  }
}
