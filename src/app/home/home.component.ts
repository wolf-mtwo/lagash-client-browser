import { Component } from '@angular/core';
import { DemoService } from '../service/product.service';
console.log(DemoService)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
  books = [];
  constructor(private _demoService: DemoService) {
    // console.log(_demoService)
    _demoService.getProductos().subscribe(
         result => {
          this.books = result;
             console.log(result);
             // if(result.code != 200){
             //     console.log(result);
             // }else{
             //
             //     // this.productos = result.data;
             // }

         },
         error => {
             console.log(<any>error);
         }
     );
  }
}
