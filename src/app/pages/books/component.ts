import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import { Book, Catalog, SearchQuery } from '../../models';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css']
})
export class BooksComponent {
  public catalog_title: string = 'Libros recientes';
  public items: Book[] = [];
  public catalogs: Catalog[] = [];
  public query: SearchQuery = {
    search: '',
    type: 'TITLE',
    total: 0,
    page: 1,
    limit: 20
  };
  config = 'TITLE';
  query_catalog = {
    page: 1,
    limit: 15
  };

  constructor(
    private router: Router,
    private _service: BooksService
  ) {
    this.search();
    _service.get_catalogs(this.query_catalog).subscribe((items: Catalog[]) => {
        this.catalogs = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  search() {
    this._service.paginate(this.query).subscribe((items: Book[]) => {
        this.items = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  reset() {
    this.query = {
      search: '',
      type: 'TITLE',
      total: 0,
      page: 1,
      limit: 20
    };
    this.search();
  }

  pagination(count) {
    this.query.page += count;
    this.search();
  }

  go_to_catalog(item) {
    console.log(item);
    this._service.catalog_items(item._id)
    .subscribe((items: Book[]) => {
        this.items = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  public go_to_item(item) {
     this.router.navigate(['/books', item._id]);
  }
}
