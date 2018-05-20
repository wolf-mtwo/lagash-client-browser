import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Producto } from '../models/producto';
// import { GLOBAL } from './global';

@Injectable()
export class DemoService {
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:5570';
    }

    getProductos(): Observable<any>{
        return this.http.get(this.url + '/v1/books');
    }
    //
    // addProducto(producto: Producto): Observable<any>{
    //     let json = JSON.stringify(producto);
    //     let params = "json="+json;
    //     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    //
    //     return this.http.post(this.url+'productos', params, {headers: headers});
    // }


}
