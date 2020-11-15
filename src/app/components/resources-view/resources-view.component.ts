import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resources-view',
  templateUrl: './resources-view.component.html',
  styleUrls: ['./resources-view.component.sass']
})
export class ResourcesViewComponent implements OnInit {

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
