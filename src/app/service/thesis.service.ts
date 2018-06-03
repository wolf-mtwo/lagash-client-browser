import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ThesisService {
    private url: string = 'http://localhost:5570/v3/browser/thesis';
    constructor(public http: HttpClient) { }

    get_suggestions(): Observable<any> {
      return this.http.get(this.get_url('suggestions'));
    }

    get_by_id(_id) {
      return this.http.get(this.get_url(_id));
    }

    get_ejemplares(_id) {
      return this.http.get(this.get_url( _id + '/ejemplares'));
    }

    get_authors(_id) {
      return this.http.get(this.get_url(_id + '/authors'));
    }

    search(text) {
      return this.http.get(this.get_url('page/1/limit/15'), {
        params: {
          search: text
        }
      });
    }

    paginate(query) {
      return this.http.get(this.get_url(`page/${query.page}/limit/${query.limit}`), {
        params: {
          search: query.search,
          type: query.type
        }
      });
    }

    private get_url(sufix) {
      return this.url + '/' + sufix;
    }

    get_catalogs(query) {
      return this.http.get(this.get_url(`catalogs/page/${query.page}/limit/${query.limit}`));
    }

    catalog_items(_id) {
      return this.http.get(this.get_url('catalogs/' + _id));
    }
}
