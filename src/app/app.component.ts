import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showBack: boolean;
  menuOpen: boolean;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showBack = event.url.includes('details');
      }
    });
  }

  toggleMenu(event?): void {
    this.menuOpen = !event;
  }

  goBack(): void {
    history.back();
  }
}
