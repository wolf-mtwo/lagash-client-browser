import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  public PATH: string;

  constructor() {
    this.PATH = 'http://localhost:5570';
    //this.PATH = 'http://bibliotecaserver.uab.edu.bo';
  }

  get_url(sufix) {
    return this.PATH + '/' + sufix;
  }

  get_thumbnail(name) {
    return this.PATH + '/files/thumbnail/' + name;
  }

  get_image(name) {
    return this.PATH + '/files/hd/' + name;
  }

  get_book_url(sufix) {
    return this.PATH + '/v3/browser/books/' + sufix;
  }

  get_thesis_url(sufix) {
    return this.PATH + '/v3/browser/thesis/' + sufix;
  }

  get_magazine_url(sufix) {
    return this.PATH + '/v3/browser/magazines/' + sufix;
  }

  get_newspaper_url(sufix) {
    return this.PATH + '/v3/browser/newspapers/' + sufix;
  }

  get_search_url(sufix) {
    return this.PATH + '/v6/search/' + sufix;
  }

  get_reader_url(sufix) {
    return this.PATH + '/v6/readers/' + sufix;
  }
}
