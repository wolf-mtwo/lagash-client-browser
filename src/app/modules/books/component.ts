import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css', '../../linearicons.css']
})
export class BooksComponent {
  books = [];
  constructor(private _service: BooksService) {
    _service.getProductos().subscribe(
         (items) => {
           console.log(items);
          this.books = items;
         },
         (error) => {
             console.log(<any>error);
         }
     );
  }
}
