import { Component } from '@angular/core';
import { BooksService } from '../../../service/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'module-books-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css', '../../../linearicons.css']
})
export class BookComponent {
  books = [];
  constructor( private router: Router, private _service: BooksService) {
    _service.getProductos().subscribe(
         (items) => {
           console.log(items);
          // this.books = items;
         },
         (error) => {
             console.log(<any>error);
         }
     );
  }

  public search() {
    console.log('sss');
  }

  public go_to_item(book) {
    console.log(book);
     this.router.navigate(['/books', book._id]);
  }
}
