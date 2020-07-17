import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Global } from './../../service/global.service';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'module-search',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css']
})

export class SearchComponent {
  @ViewChildren("filters") filters: QueryList<ElementRef>;

  items:any ={}
  query = {
    search: '',
    type: 'TITLE',
    isAll: true,
    total: 0,
    listAuthor:'',
    listEditorial:'',
    listYear:'',
    page: 1,
    limit: 20
  };

  config = 'TITLE';
  query_catalog = {
    page: 1,
    limit: 15
  };

  public showList:boolean =false;

  constructor(
    private global: Global,
    private router: Router,
    private _service: SearchService
  ) {
    this.search();
  }

  search() {
    this._service.searchData(this.query).subscribe(
      (items) => {
        this.items = items;
      }, (error) => {
        console.log(<any>error);
      }
    );
  }

  reset() {
    this.query = {
      search: '',
      type: 'TITLE',
      isAll: true,
      total: 0,
      listAuthor:'',
      listEditorial:'',
      listYear:'',
      page: 1,
      limit: 20
    };
    this.search();
    this.uncheckAll();
  }

  pagination(count) {
    this.query.page += count;
    this.search();
  }

  public go_to_item(item) {
     this.router.navigate(['/detail', item.id]);
  }
  
  onChange(input: HTMLInputElement, data, type, stringSplit) {

    var aYears = stringSplit == "" ? [] : stringSplit.split(",");
    
    if(input.checked == true) {
      aYears.push(data);
    }
    else {
      aYears = this.removeItem(aYears, data);
    }

    if(type == 'year') 
      this.query.listYear = aYears.toString();

    if(type == 'autor') 
      this.query.listAuthor = aYears.toString();

    if(type == 'editorial') 
      this.query.listEditorial = aYears.toString();
    
 }

 removeItem(array, data) {
    array.forEach( (item, index) => {
      if(item == data ||item=="") array.splice(index,1);
    });
    return array;
  }
  
  uncheckAll() {
    this.filters.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }
}
