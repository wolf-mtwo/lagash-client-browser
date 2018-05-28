import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:5570';
    }

    getProductos(): Observable<any>{
        return this.http.get(this.url + '/v1/books');
    }
}
