import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IntegrationService {
    private url: string = 'http://api.attendance.ninja';
    listeners = [];
    constructor(public http: HttpClient) { }

    login(user) {
      return this.http.post(this.get_url('p1/login'), user);
    }

    setup(user) {
      this.listeners.forEach((call) => {
        call(user);
      });
    }

    on(call) {
      this.listeners.push(call);
    }

    private get_url(sufix) {
      return this.url + '/' + sufix;
    }
}
