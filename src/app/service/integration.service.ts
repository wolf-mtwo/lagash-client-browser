import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global.service';

@Injectable()
export class IntegrationService {
  listeners = [];

  constructor(private global: Global, public http: HttpClient) { }

  login(user) {
    return this.http.post('http://api.attendance.ninja/p1/login', user);
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
    return this.http.post(this.global.get_url('v4/booking'), item);
  }

  get_faculties() {
    return this.http.get(this.global.get_url('v4/faculties'));
  }

  get_carrers() {
    return this.http.get(this.global.get_url('v4/carrers'));
  }
}
