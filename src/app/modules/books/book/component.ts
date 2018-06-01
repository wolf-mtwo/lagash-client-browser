import { Component } from '@angular/core';
import { BooksService } from '../../../service/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module-books-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css', '../../../linearicons.css']
})
export class BookComponent {
  book_id = null;
  book = {};
  ejemplares = [];
  book_service = null;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private _service: BooksService) {
    this.book_service = _service;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book_id = params.book_id;
      this.sub = this.book_service.get_by_id(this.book_id).subscribe(
           (item) => {
            this.book = item;
           },
           (error) => {
               console.log(<any>error);
           }
       );
      this.book_service.get_ejemplares(this.book_id).subscribe(
           (items) => {
            this.ejemplares = items;
           },
           (error) => {
               console.log(<any>error);
           }
       );
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public go_to_item(ejemplar) {
     console.log(ejemplar);
  }
}
