import { Injectable } from '@angular/core';

@Injectable()
export class LagashConstants {

  constructor() {
  }

  resources() {
    return {
      'BOOK': 'BOOK',
      'THESIS': 'THESIS',
      'NEWSPAPER': 'NEWSPAPER',
      'MAGAZINE': 'MAGAZINE',
    }
  }
}
