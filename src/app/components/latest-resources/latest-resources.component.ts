import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../service/books.service';
import { Global } from '../../service/global.service';
import { LagashConstants } from '../../service/lagash-constants.service';
import { ThesisService } from '../../service/thesis.service';

@Component({
  selector: 'app-latest-resources',
  templateUrl: './latest-resources.component.html',
  styleUrls: ['./latest-resources.component.sass']
})
export class LatestResourcesComponent implements OnInit {
  @Input() type: any;
  books: any = [];
  theses: any = [];
  query = {
    search: '',
    type: 'TITLE',
    total: 0,
    page: 1,
    limit: 20
  };

  constructor(
    public constant: LagashConstants,
    private global: Global,
    private router: Router,
    private book_service: BooksService,
    private thesis_service: ThesisService
  ) {
    this.search();
  }

  ngOnInit(): void {}

  search() {
    this.book_service.paginate(this.query)
    .subscribe((items) => {
      this.books = items;
    }, (error) => {
      console.log(<any>error);
    });
    this.thesis_service.paginate(this.query)
    .subscribe((items) => {
      this.theses = items;
    }, (error) => {
      console.log(<any>error);
    });
  }

  go_to_item(item, resource) {
    switch (resource) {
      case 'BOOK':
        this.router.navigate(['/books', item._id]);
        break;
      case 'THESIS':
        this.router.navigate(['/thesis', item._id]);
        break;
    }
  }
}
