import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackpackService } from 'src/app/service/backpack.service';
import { BooksService } from 'src/app/service/books.service';
import { LagashConstants } from 'src/app/service/lagash-constants.service';
import { MagazinesService } from 'src/app/service/magazines.service';
import { NewspapersService } from 'src/app/service/newspapers.service';
import { ThesisService } from 'src/app/service/thesis.service';

@Component({
  selector: 'app-ejemplares-view',
  templateUrl: './ejemplares-view.component.html',
  styleUrls: ['./ejemplares-view.component.sass']
})
export class EjemplaresViewComponent implements OnInit {
  @Input() _id: String;
  @Input() type: String;
  @Input() item: any = {};
  @Input() authors: any = [];
  @Input() labels: any = null;

  free_ejemplares: any = [];
  submit_ejemplares: any = [];
  ejemplar_loans: any = [];
  _service: any = null;

  constructor(
    public constant: LagashConstants,
    private book_service: BooksService,
    private thesis_service: ThesisService,
    private newspapers_service: NewspapersService,
    private magazine_service: MagazinesService,
    private loans_store: BackpackService,
    private store: BackpackService
  ) {
    this.ejemplar_loans = this.loans_store.load().map(loan => loan.item.ejemplar);
  }

  ngOnInit() {
    this._service = this.get_typed_service();
    this._service.get_ejemplares(this._id)
    .subscribe((items) => {
      this.free_ejemplares = items.find(loan => loan._id !== 'STORED');
      this.submit_ejemplares = items.find(loan => loan._id === 'STORED');


      this.free_ejemplares = items.map((item) => {
        item.is_on_cart = this.is_on_cart(item);
        return item;
      });
    },
    (error) => {
      console.log(<any>error);
    });
  }

  get_typed_service() {
    const resource = this.constant.resources();
    switch (this.type) {
      case resource.BOOK:
        return this.book_service;
      case resource.THESIS:
        return this.thesis_service;
      case resource.NEWSPAPER:
        return this.newspapers_service;
      case resource.MAGAZINE:
        return this.magazine_service;
      default:
        throw new Error(`Resource ${this.type} does not exist.`);
    }
  }

  remove_item(item) {
    item.is_on_cart = false;
    this.store.remove_ejemplar(item._id);
  }

  pick_item(item) {
    item.is_on_cart = true;
    let cart_item = this.is_on_cart(item);
    if (cart_item) {
      return;
    }
    //this.pick_ejemplar.emit(item);
    this.store.save(this.type, {
      material: this.item,
      authors: this.authors,
      ejemplar: item
    });
  }

  is_on_cart(item) {
    return this.ejemplar_loans.find(loan => loan._id === item._id);
  }
}
