import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackpackService } from 'src/app/service/backpack.service';
import { BooksService } from 'src/app/service/books.service';
import { LagashConstants } from 'src/app/service/lagash-constants.service';
import { Global } from 'src/app/service/global.service';
import { ThesisService } from 'src/app/service/thesis.service';
import { NewspapersService } from 'src/app/service/newspapers.service';
import { MagazinesService } from 'src/app/service/magazines.service';


@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.sass']
})
export class ResourceViewComponent implements OnInit {
  @Input() _id: String;
  @Input() type: String;
  item: any = {};
  authors: any = [];
  ejemplares: any = [];
  _service: any = null;
  labels: any = null;

  constructor(
    public constant: LagashConstants,
    private global: Global,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private book_service: BooksService,
    private thesis_service: ThesisService,
    private newspapers_service: NewspapersService,
    private magazine_service: MagazinesService,
    private store: BackpackService
  ) {
  }

  ngOnInit() {
    this._service = this.get_typed_service();
    this._service.get_by_id(this._id).subscribe((item) => {
      this.item = this.format_properties(item);
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

  format_properties(item) {
    item.brings = item.brings ? item.brings.split(',') : ['NO EXISTE'];
    item.tags = item.tags ? item.tags.split(',') : ['NO EXISTE'];
    item.indexes = item.index ? item.index.split('\n') : ['NO EXISTE'];
    item.illustrations = item.illustrations ? item.illustrations.split(',') : ['NO EXISTE'];
    return item;
  }

  pick_item(item) {
    this.store.save(this.type, {
      material: this.item,
      authors: this.authors,
      ejemplar: item
    });
  }

  get_label() {
    const resource = this.constant.resources();
    switch (this.type) {
      case resource.BOOK:
        return {
          title: 'Libro'
        };
      case resource.THESIS:
        return {
          title: 'Tesis'
        };
      case resource.NEWSPAPER:
        return {
          title: 'Periodico'
        };
      case resource.MAGAZINE:
        return {
          title: 'Revista'
        };
      default:
        throw new Error(`Labels for ${this.type} does not exist.`);
    }
  }
}
