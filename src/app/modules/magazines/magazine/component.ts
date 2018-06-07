import { Component } from '@angular/core';
import { MagazinesService } from '../../../service/magazines.service';
import { BackpackService } from '../../../service/backpack.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'module-magazines-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css', '../../../linearicons.css']
})
export class MagazineComponent {
  _id = null;
  item: any = {};
  ejemplares: any = [];
  private sub: any;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private _service: MagazinesService,
    private store: BackpackService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params.magazine_id;
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

    });
  }

  reload(item) {
    item.brings = item.brings ? item.brings.split(',') : ['NO EXISTE'];
    item.tags = item.tags ? item.tags.split(',') : ['NO EXISTE'];
    item.indexes = item.index ? item.index.split('\n') : ['NO EXISTE'];
    item.illustrations = item.illustrations ? item.illustrations.split(',') : ['NO EXISTE'];
    this.item = item;
  }

  pick_item(item) {
    this.store.save('MAGAZINE', {
      material: this.item,
      authors: [],
      ejemplar: item
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
