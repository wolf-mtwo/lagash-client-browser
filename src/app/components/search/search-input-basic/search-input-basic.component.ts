import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchQuery } from '../../../models';

@Component({
  selector: 'app-search-input-basic',
  templateUrl: './search-input-basic.component.html',
  styleUrls: ['./search-input-basic.component.sass']
})
export class SearchInputBasicComponent implements OnInit {
  @Input() public query: SearchQuery = null;
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search_items(): void {
    this.search.emit();
  }
}
