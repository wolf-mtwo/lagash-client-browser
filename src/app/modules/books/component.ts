import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge} from 'rxjs/operators';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css', '../../linearicons.css']
})
export class BooksComponent {
  books: any = [];
  model: any;
  searching = false;
  searchFailed = false;
  item = {};
  query = {
    search: '',
    total: 0,
    page: 1,
    limit: 20
  };
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor( private router: Router, private _service: BooksService) {
    _service.get_suggestions().subscribe((items) => {
        this.books = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term)
        .pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false),
      merge(this.hideSearchingWhenUnsubscribed)
    );

  formatter = (x: {title: string}) => x.title;

  search_text(text) {
    if (text._id) {
        this.go_to_item(text);
        return;
    }
    this.query.search = text;
    this._service.paginate(this.query).subscribe((items) => {
        this.books = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  public go_to_item(book) {
    console.log(book);
     this.router.navigate(['/books', book._id]);
  }
}
