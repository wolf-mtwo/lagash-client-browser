import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-information-view',
  templateUrl: './resource-information-view.component.html',
  styleUrls: ['./resource-information-view.component.sass']
})
export class ResourceInformationViewComponent implements OnInit {
  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
