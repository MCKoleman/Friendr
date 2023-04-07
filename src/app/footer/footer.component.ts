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
}
