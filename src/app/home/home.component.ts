import { Component } from '@angular/core';
import { DemoService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './main.css']
})
export class HomeComponent {
  title = 'app';
  books = [];
  constructor(private _demoService: DemoService) {

  }
}
