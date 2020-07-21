import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';
import { Global } from './../../service/global.service';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'module-search',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css']
})

export class SearchComponent {
  @ViewChildren("filters") filters: QueryList<ElementRef>;

  public yearData=new Array();
  public options: Options;
  
  public descriptorsValue: string[];
  public indexesValue: string[];
  public yearsValue: string[];
  public authorsValue: string[];
  public editorialsValue: string[];
  
  public totalByPage:any;
  public showList:boolean =false;

  items:any ={}
  query = {
    search: '',
    type: 'TITLE',
    isAll: true,
    total: 0,
    listAuthor:'',
    listDestriptor:'',
    listIndexer:'',
    listEditorial:'',
    listYear:'',
    page: 1,
    limit: 30
  };

  config = 'TITLE';

  constructor(
    private global: Global,
    private router: Router,
    private _service: SearchService) {
      this.search();
      this.totalByPage = [30, 40, 50];
      this.options = {
        width: '250',
        multiple: true,
        tags: true
      };
      for (let i = 2020; i >= 1900; i--){
        this.yearData.push(i);
      }
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
  
  onChange(type) {
    // var aYears = stringSplit == "" ? [] : stringSplit.split(",");
    // if(input.checked == true) {
    //   aYears.push(data);
    // }
    // else {
    //   aYears = this.removeItem(aYears, data);
    // }
    
    if(type == 'descriptor' && this.descriptorsValue != undefined) 
      this.query.listDestriptor = this.descriptorsValue.toString();

    if(type == 'index' && this.indexesValue != undefined) 
      this.query.listIndexer = this.indexesValue.toString();

    if(type == 'year' && this.yearsValue != undefined) 
      this.query.listYear = this.yearsValue.toString();

    if(type == 'autor' && this.authorsValue != undefined) 
      this.query.listAuthor = this.authorsValue.toString();

    if(type == 'editorial' && this.editorialsValue != undefined) 
      this.query.listEditorial = this.editorialsValue.toString();

      console.log(type,  this.query.listDestriptor);
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

  setPage(item) {
    console.log(item)
    this.query.limit = item;
  }
}
