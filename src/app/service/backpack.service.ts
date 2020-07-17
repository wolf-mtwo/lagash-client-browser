import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from './store.service';

@Injectable()
export class BackpackService {
  listeners = [];
  KEY: string = 'BACKPACK';
  I18N = {
    'BOOK': 'LIBRO',
    'THESIS': 'TESIS',
    'MAGAZINE': 'REVISTAR',
    'NEWSPAPER': 'PERIODICO'
  };

  constructor(
    private toastr: ToastrService,
    private store: StoreService
  ) {
  }

  save(key, item) {
    this.toastr.success('Se guardo el ejemplar', this.I18N[key]);
    var items = this.store.load(this.KEY, false) || [];
    var item: any = {key, item};
    items.push(item);
    this.store.save(this.KEY, items, false);
    this.emit(items.length);
  }

  load() {
    return this.store.load(this.KEY, false) || [];
  }

  emit(message) {
    this.listeners.forEach((call) => {
      call(message);
    });
  }

  remove_all() {
    this.store.remove(this.KEY);
    this.emit(0);
  }

  remove_position(index) {
    var items = this.store.load(this.KEY, false);
    items.splice(index, 1);
    this.store.save(this.KEY, items, false);
    this.emit(items.length);
  }

  on(call) {
    this.listeners.push(call);
  }

  get_tags(tags) {
    var regex = /\[.*?\]/g;
    var match;
    var items = [];
    while ((match = regex.exec(tags)) !== null) {
        items.push(match[0]);
    }
    return items;
  }
}
