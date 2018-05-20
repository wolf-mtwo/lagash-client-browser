import { Component, OnInit } from '@angular/core';
// import { DemoService } from '../service/product.service';
// import { Observable } from 'rxjs/Observable';
// console.log(Observable)
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
   constructor() {
   }
  //  constructor(private _demoService: DemoService) {
   //
  //    _demoService.getProductos().subscribe(
  //         result => {
  //             console.log(result);
  //             // if(result.code != 200){
  //             //     console.log(result);
  //             // }else{
  //             //
  //             //     // this.productos = result.data;
  //             // }
   //
  //         },
  //         error => {
  //             console.log(<any>error);
  //         }
  //     );
  //  }

  ngOnInit() {
  }
  // coursesObservable: Observable<any[]>;
  // constructor(private db: AngularFireDatabase) { }
  // ngOnInit() {
  //   this.coursesObservable = this.getCourses('/courses');
  // }
  // getCourses(listPath): Observable<any[]> {
  //   return this.db.list(listPath).valueChanges();
  // }
}
