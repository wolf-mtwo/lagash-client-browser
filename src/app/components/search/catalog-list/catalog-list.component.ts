import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catalog } from '../../../models';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.sass']
})
export class CatalogListComponent implements OnInit {
  @Input() title: string = 'Recientes';
  @Input() items: Catalog[] = [];
  @Output() on_clean_up: EventEmitter<any> = new EventEmitter();
  @Output() on_select: EventEmitter<Catalog> = new EventEmitter();

  constructor() {
    console.log("cataog list component");
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.on_clean_up.emit();
  }

  select_item(data: Catalog): void {
    this.on_select.emit(data);
  }
}
