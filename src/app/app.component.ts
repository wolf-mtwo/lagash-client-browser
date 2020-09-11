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
  
  constructor(
    private integration_service: IntegrationService,
    
    private store: StoreService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    integration_service.on((item) => {
      this.user = item;
    });
    integration_service.user_on((reader) => {
      this.user = reader;
    });
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
