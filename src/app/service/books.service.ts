import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {
    private url: string = 'http://localhost:5570/v3/browser/books';
    constructor(public http: HttpClient) { }

    get_suggestions(): Observable<any> {
        return this.http.get(this.get_url('/suggestions'));
    }

    get_by_id(_id) {
        return this.http.get(this.get_url(_id));
    }

    get_ejemplares(_id) {
        return this.http.get(this.get_url( _id + '/ejemplares'));
    }

    search(text) {
        return this.http.get(this.get_url('/page/1/limit/15'), {
          params: {
            search: text
          }
        });
    }

    private get_url(_id) {
      return this.url + "/" + _id;
    }
}
