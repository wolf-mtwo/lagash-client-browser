import { Component } from '@angular/core';
import { ThesisService } from '../../../service/thesis.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module-thesis-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css', '../../../linearicons.css']
})
export class ThesisComponent {
  _id = null;
  item = {};
  ejemplares: any = [];
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private _service: ThesisService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params.thesis_id;
      this.sub = this._service.get_by_id(this._id).subscribe((item) => {
          item.brings = item.brings ? item.brings.split(',') : ['NO EXISTE'];
          item.tags = item.tags ? item.tags.split(',') : ['NO EXISTE'];
          item.indexes = item.index ? item.index.split('\n') : ['NO EXISTE'];
          item.illustrations = item.illustrations ? item.illustrations.split(',') : ['NO EXISTE'];
          this.item = item;
        },
        (error) => {
          console.log(<any>error);
        }
      );
      this._service.get_ejemplares(this._id).subscribe(
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
