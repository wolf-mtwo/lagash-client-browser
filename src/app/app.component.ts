import { Component } from '@angular/core';

import { IntegrationService } from './service/integration.service';
import { BackpackService } from './service/backpack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'lagash-client-browser';
  user = null;
  loans = 0;
  constructor(
    private integration_service: IntegrationService,
    private store: BackpackService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.loans = store.load().length;
    integration_service.on((item) => {
      this.user = item;
    });
    store.on((item) => {
      this.update_loans(item);
    });
  }

  update_loans(item) {
    this.loans = item;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.integration_service.emit(null);
  }

  show_elements() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
}
