import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  validate_key(key) {
    if (!key) {
      throw new Error('key is undefined');
    }
  }

  save(key, value, state) {
    this.validate_key(key);
    if (!value) {
      throw new Error('value is undefined');
    }
    if (state) {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  load(key, state) {
    this.validate_key(key);
    if (state) {
      return localStorage.getItem(key);
    }
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key) {
    this.validate_key(key);
    localStorage.removeItem(key);
  }
}
