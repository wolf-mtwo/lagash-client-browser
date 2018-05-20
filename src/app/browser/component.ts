import { Component } from '@angular/core';
import { DemoService } from '../service/product.service';
console.log(DemoService)
@Component({
  selector: 'app-browser',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class BrowserComponent {
  title = 'app';
  books = [];
  constructor(private _demoService: DemoService) {
    // console.log(_demoService)
    _demoService.getProductos().subscribe(
         result => {
          this.books = result;
         },
         error => {
             console.log(<any>error);
         }
     );
  }
}
