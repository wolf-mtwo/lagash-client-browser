import { Component } from '@angular/core';
import { IntegrationService } from '../../../service/integration.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module-login',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css', '../../../linearicons.css']
})
export class LoginComponent {
  user: any = {
    email: 'wolf@wolf.com',
    password: 'wolf'
  };
  isloading: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _service: IntegrationService) {
  }

  login(item) {
    this.isloading = true;
    this._service.login(item)
    .subscribe((item) => {
      this.isloading = false;
      this.save(item);
      this._service.emit(item);
      this.router.navigate(['/main']);
    }, (error) => {
      this.isloading = false;
      alert(error.error.message);
    });
  }

  save(item) {
    localStorage.setItem('user', JSON.stringify(item));
    localStorage.setItem('token', JSON.stringify(item.token));
  }
}
