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
  books = [];
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor( private router: Router, private _service: BooksService) {
    _service.get_suggestions().subscribe(
         (items) => {
           console.log(items);
          this.books = items;
         },
         (error) => {
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

  public go_to_item(book) {
    console.log(book);
     this.router.navigate(['/books', book._id]);
  }
}
