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
  images = [
    './assets/img/carousel/integral.jpg',
    './assets/img/carousel/top-banner.jpg',
    './assets/img/carousel/top-banner-2.jpg'
  ];
  constructor(private _demoService: DemoService) {
  }
}
