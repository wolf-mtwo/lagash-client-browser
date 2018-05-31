import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Global {
    public url: string;

    constructor() {
        this.url = 'http://localhost:5570';
    }

    getProductos(): String {
        return this.url;
    }
}
