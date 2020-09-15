import { Component } from '@angular/core';
import { Global } from './../../../service/global.service';
import { ThesisService } from '../../../service/thesis.service';
import { BackpackService } from '../../../service/backpack.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'module-thesis-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css']
})
export class ThesisComponent {
  _id = null;
  item: any = {};
  authors: any = [];
  ejemplares: any = [];
  private sub: any;

  constructor(
    private global: Global,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _service: ThesisService,
    private store: BackpackService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params.thesis_id;
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
    this.store.save('THESIS', {
      material: this.item,
      authors: this.authors,
      ejemplar: item
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
