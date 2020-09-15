import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-empty',
  templateUrl: './search-empty.component.html',
  styleUrls: ['./search-empty.component.sass']
})
export class SearchEmptyComponent implements OnInit {
  @Input() items: object[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
