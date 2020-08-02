import { Component } from '@angular/core';
import { StoreService } from './service/store.service';
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
  reader = null;
  loans = 0;
  constructor(
    private integration_service: IntegrationService,
    private loan_store: BackpackService,
    private store: StoreService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.loans = this.loan_store.load().length;
    integration_service.on((item) => {
      this.user = item;
    });
    this.loan_store.on((item) => {
      this.update_loans(item);
    });
    integration_service.user_on((reader) => {
      this.user = reader;
    });
  }

  update_loans(item) {
    this.loans = item;
  }

  update_reader(reader) {
    this.reader = reader;
    console.log(this.reader);
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
