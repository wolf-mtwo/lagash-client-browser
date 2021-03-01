import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global.service';
import { Book, Catalog } from '../models';

@Injectable()
export class BooksService {

  constructor(private global: Global, public http: HttpClient) {
  }

  get_by_id(_id) {
    return this.http.get(this.global.get_book_url(_id));
  }

  get_ejemplares(_id) {
    return this.http.get(this.global.get_book_url( _id + '/ejemplares'));
  }

  get_authors(_id) {
    return this.http.get(this.global.get_book_url(_id + '/authors'));
  }

  get_borrower(ejemplar_id) {
    return this.http.get(this.global.get_reader_url('ejemplares/' + ejemplar_id));
  }

  search(text) {
    return this.http.get(this.global.get_book_url('page/1/limit/15'), {
      params: {
        search: text
      }
    });
  }

  paginate(query) {
    return this.http.get<Book[]>(this.global.get_book_url(`page/${query.page}/limit/${query.limit}`), {
      params: {
        search: query.search,
        type: query.type
      }
    });
  }

  get_catalogs(query) : Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.global.get_book_url(`catalogs/page/${query.page}/limit/${query.limit}`));
  }

  catalog_items(_id) : Observable<Book[]> {
    return this.http.get<Book[]>(this.global.get_book_url('catalogs/' + _id));
  }
}
