import { Component } from '@angular/core';
import { DemoService } from '../service/product.service';

@Component({
  selector: 'app-browser',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class BrowserComponent {
  title = 'app';
  books = [];
  constructor(private _demoService: DemoService) {
    // _demoService.getProductos().subscribe(
    //      result => {
    //       this.books = result;
    //      },
    //      error => {
    //          // console.log(<any>error);
    //      }
    //  );
  }
}
