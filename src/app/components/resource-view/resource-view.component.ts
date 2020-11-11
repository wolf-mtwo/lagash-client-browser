import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.sass']
})
export class ResourceViewComponent implements OnInit {

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
