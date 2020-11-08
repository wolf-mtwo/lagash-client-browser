import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './global.service';
import { UUID } from './UUID.service';
import { SearchQuery } from '../models';
import { StoreService } from './store.service';

@Injectable()
export class ReportsService {

  constructor(
    private global: Global,
    public http: HttpClient,
    private uuid_service: UUID,
    private store: StoreService,
  ) {
  }

  save(item) {
    return this.http.post(this.global.get_search_report_url(''), item);
  }
 
  public store_search(query: SearchQuery, material_id: string, material_type: string) {
    const reader = this.store.load('user', false) || null;
    this.save({
      _id: this.uuid_service.next(),
      reader_id: reader ? reader._id : null,
      material_id: material_id,
      material_type: material_type,
      search: query.search,
      options: [query.page, query.limit, query.type].join(',')
    })
    .subscribe(() => {
      console.log('search stored');
    }, (error) => {
      console.log(<any>error);
    });
  }
}
