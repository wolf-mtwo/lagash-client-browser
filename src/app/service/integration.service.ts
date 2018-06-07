import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IntegrationService {
    private integration_url: string = 'http://api.attendance.ninja';
    private url: string = 'http://localhost:5570/v4/booking';
    listeners = [];

    constructor(public http: HttpClient) { }

    login(user) {
      return this.http.post(this.get_url('p1/login'), user);
    }

    emit(user) {
      this.listeners.forEach((call) => {
        call(user);
      });
    }

    on(call) {
      this.listeners.push(call);
    }

    store_loan(item) {
      return this.http.post(this.url, item);
    }

    private get_url(sufix) {
      return this.integration_url + '/' + sufix;
    }
}
