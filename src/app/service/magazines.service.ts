import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Global } from './global.service';

@Injectable()
export class MagazinesService {

    constructor(private global: Global, public http: HttpClient) {
    }

    get_by_id(_id) {
      return this.http.get(this.global.get_magazine_url(_id));
    }

    get_ejemplares(_id) {
      return this.http.get(this.global.get_magazine_url( _id + '/ejemplares'));
    }

    get_authors(_id) {
      return this.http.get(this.global.get_magazine_url(_id + '/authors'));
    }

    search(text) {
      return this.http.get(this.global.get_magazine_url('page/1/limit/15'), {
        params: {
          search: text
        }
      });
    }

    paginate(query) {
      return this.http.get(this.global.get_magazine_url(`page/${query.page}/limit/${query.limit}`), {
        params: {
          search: query.search,
          type: query.type
        }
      });
    }

    get_catalogs(query) {
      return this.http.get(this.global.get_magazine_url(`catalogs/page/${query.page}/limit/${query.limit}`));
    }

    catalog_items(_id) {
      return this.http.get(this.global.get_magazine_url('catalogs/' + _id));
    }
}
