import { Input, Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Catalog, SearchQuery } from 'src/app/models';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.sass']
})
export class SearchToolbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Catalog[] = [];
  @Input() query: SearchQuery = null;
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() on_clean_up: EventEmitter<any> = new EventEmitter();
  @Output() on_select: EventEmitter<Catalog> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reset(): void {
    this.on_clean_up.emit();
  }

  search_items(): void {
    this.search.emit();
  }

  select_item(data: Catalog): void {
    this.on_select.emit(data);
  }
}
