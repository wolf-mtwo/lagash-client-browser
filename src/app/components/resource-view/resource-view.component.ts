import { Component, Input, OnInit } from '@angular/core';
import { Global } from 'src/app/service/global.service';

@Component({
  selector: 'app-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.sass']
})
export class ResourceViewComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(
    private global: Global,
  ) { }

  ngOnInit(): void {
  }
}
