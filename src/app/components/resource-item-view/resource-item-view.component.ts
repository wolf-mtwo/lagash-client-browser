import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resource-item-view',
  templateUrl: './resource-item-view.component.html',
  styleUrls: ['./resource-item-view.component.sass']
})
export class ResourceItemViewComponent implements OnInit {

  @Input() item: any = null;

  constructor(
    private global: Global,
  ) { }

  ngOnInit(): void {
  }
}
