import { Component } from '@angular/core';
import { Thesis, Catalog, SearchQuery } from '../../models';
import { Global } from './../../service/global.service';
import { ThesisService } from '../../service/thesis.service';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/service/reports.service';

@Component({
  selector: 'module-thesises',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class ThesisesComponent {
  public catalog_title: string = 'Tesis';
  public material_type: string = 'THESIS';
  public items: Thesis[] = [];
  public catalogs: Catalog[] = [];
  public query: SearchQuery = {
    search: '',
    type: 'TITLE',
    total: 0,
    page: 1,
    limit: 21
  };
  config = 'TITLE';
  query_catalog = {
    page: 1,
    limit: 15
  };

  constructor(
    private router: Router,
    private _service: ThesisService,
    private report_service: ReportsService,
  ) {
    this.search();
    _service.get_catalogs(this.query_catalog).subscribe((items: Catalog[]) => {
        this.catalogs = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  search() {
    this._service.paginate(this.query).subscribe((items: Thesis[]) => {
        this.items = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
    this.report_service.store_search(this.query, null, this.material_type);
  }

  reset() {
    this.query = {
      search: '',
      type: 'TITLE',
      total: 0,
      page: 1,
      limit: 21
    };
    this.search();
  }

  pagination(count) {
    this.query.page += count;
    this.search();
  }

  go_to_catalog(item) {
    console.log(item);
    this._service.catalog_items(item._id)
    .subscribe((items: Thesis[]) => {
        this.items = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  public go_to_item(item) {
     //this.router.navigate(['/books', item._id]);
     this.report_service.store_search(this.query, item._id, this.material_type);
     const url = this.router.serializeUrl(this.router.createUrlTree(['/thesis', item._id]));
    window.open(url, '_blank');
  }
}
