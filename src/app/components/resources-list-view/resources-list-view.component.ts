import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resources-list-view',
  templateUrl: './resources-list-view.component.html',
  styleUrls: ['./resources-list-view.component.sass']
})
export class ResourcesListViewComponent implements OnInit {

  @Input() items: any[] = [];
  @Output() select_item: EventEmitter<any> = new EventEmitter();

  constructor(
    private global: Global,
  ) { }

  ngOnInit(): void {
  }

  select_element(data): void {
    this.select_item.emit(data);
  }
}
