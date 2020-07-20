import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global.service';

@Injectable()
export class ReaderService {

  constructor(private global: Global, public http: HttpClient) {
  }

  find_by_id(_id) {
    return this.http.get(this.global.get_reader_url(_id));
  }

  save(item) {
    return this.http.post(this.global.get_url('v6/readers'), item);
  }
}
