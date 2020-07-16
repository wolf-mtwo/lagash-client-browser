import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Global } from './../service/global.service';
import { BooksService } from '../service/books.service';
import { ThesisService } from '../service/thesis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  title = 'app';
  books: any = [];
  theses: any = [];
  best_books: any = [{
    _id: 1,
    title: 'test 1'
  }, {
    _id: 1,
    title: 'test 1'
  }];
  stats: any = [{
    total: 1000,
    title: 'Libros'
  }, {
    total: 1000,
    title: 'Libros'
  }, {
    total: 1000,
    title: 'Libros'
  }];
  images = [
    './assets/img/carousel/integral.jpg',
    './assets/img/carousel/top-banner.jpg',
    './assets/img/carousel/top-banner-2.jpg'
  ];
  query = {
    search: '',
    type: 'TITLE',
    total: 0,
    page: 1,
    limit: 20
  };
  constructor(
    config: NgbCarouselConfig,
    private global: Global,
    private router: Router,
    private book_service: BooksService,
    private thesis_service: ThesisService
  ) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.search();
  }

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
