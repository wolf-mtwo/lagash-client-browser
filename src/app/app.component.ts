import { Component } from '@angular/core';
import $ from 'jquery';
import { IntegrationService } from './service/integration.service';
// import 'owl.carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './main.css', './linearicons.css']
})
export class AppComponent {
  title = 'app';
  user = null;
  constructor(private integration_service: IntegrationService) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    integration_service.on((item) => {
      this.listener(item);
    });
  }

  listener(item) {
    this.user = item;;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  show_elements() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
}
