import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resources-list-item-view',
  templateUrl: './resources-list-item-view.component.html',
  styleUrls: ['./resources-list-item-view.component.sass']
})
export class ResourcesListItemViewComponent implements OnInit {

  @Input() item: any = null;

  constructor(
    private global: Global,
  ) { }

  ngOnInit(): void {
  }
}
