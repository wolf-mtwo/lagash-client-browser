import { Injectable, Query } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global.service';

@Injectable()
export class SearchService {

    constructor(private global: Global, public http: HttpClient) {
    }

    search(text) {
      return this.http.get(this.global.get_book_url('page/1/limit/15'), {
        params: {
          search: text
        }
      });
    }

    paginate(query) {
      return this.http.get(this.global.get_book_url(`page/${query.page}/limit/${query.limit}`), {
        params: {
          search: query.search,
          type: query.type
        }
      });
    }

    searchData(query) {
      return this.http.get(this.global.get_search_url(`page/${query.page}/limit/${query.limit}`), {
        params: {
          search: query.search,
          type: query.type,
          isAll: query.isAll
        }
      });

      ///typeSearch/{typeSearch}/isAll/{isAll}/search/{search}
    }

    get_catalogs(query) {
      return this.http.get(this.global.get_book_url(`catalogs/page/${query.page}/limit/${query.limit}`));
    }

}
