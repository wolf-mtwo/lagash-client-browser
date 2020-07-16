import { Component } from '@angular/core';
import { Global } from './../../service/global.service';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'module-search',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css']
})

export class SearchComponent {

  items: any = [];
  catalogs: any = [];
  query = {
    search: '',
    type: 'TITLE',
    isAll: true,
    total: 0,
    page: 1,
    limit: 20
  };

  config = 'TITLE';
  query_catalog = {
    page: 1,
    limit: 15
  };

  public showList:boolean =false;

  constructor(
    private global: Global,
    private router: Router,
    private _service: SearchService
  ) {
    this.search();
  }

  search() {
    this._service.searchData(this.query).subscribe((items) => {
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
      isAll: true,
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

  public go_to_item(item) {
     this.router.navigate(['/detail', item.id]);
  }
}
