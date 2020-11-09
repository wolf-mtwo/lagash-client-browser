import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchQuery } from 'src/app/models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() public query: SearchQuery = null;
  @Output() pagination: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change_page(number: number): void {
    this.pagination.emit(number);
  }
}
