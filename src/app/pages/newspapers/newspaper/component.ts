import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LagashConstants } from 'src/app/service/lagash-constants.service';

@Component({
  selector: 'module-newspapers-id',
  templateUrl: './component.html',
  styleUrls: ['../../../wargos.css', './component.css']
})
export class NewspaperComponent {
  _id = null;

  constructor(
    public constant: LagashConstants,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params.newspaper_id;
    });
  }
}
