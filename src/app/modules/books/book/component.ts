import { Component } from '@angular/core';
import { BooksService } from '../../../service/books.service';
import { BackpackService } from '../../../service/backpack.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'module-books-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css']
})
export class BookComponent {
  _id = null;
  item: any = {};
  authors: any = [];
  ejemplares: any = [];
  private sub: any;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _service: BooksService,
    private store: BackpackService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params.book_id;
      this.sub = this._service.get_by_id(this._id).subscribe((item) => {
        this.reload(item);
        this._service.get_ejemplares(this._id).subscribe((items) => {
          this.ejemplares = items;
        },
        (error) => {
          console.log(<any>error);
        });
      },
      (error) => {
        console.log(<any>error);
      });
      this._service.get_authors(this._id).subscribe((items) => {
        this.authors = items;
      },
      (error) => {
        console.log(<any>error);
      });
    });
  }

  reload(item) {
    item.brings = item.brings ? item.brings.split(',') : ['NO EXISTE'];
    item.tags = item.tags ? this.store.get_tags(item.tags) : ['NO EXISTE'];
    item.indexes = item.index ? item.index.split('\n') : ['NO EXISTE'];
    item.illustrations = item.illustrations ? item.illustrations.split(',') : ['NO EXISTE'];
    this.item = item;
  }

  pick_item(item) {
    this.store.save('BOOK', {
      material: this.item,
      authors: this.authors,
      ejemplar: item
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
