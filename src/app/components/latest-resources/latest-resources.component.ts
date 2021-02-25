import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../service/books.service';
import { Global } from '../../service/global.service';
import { LagashConstants } from '../../service/lagash-constants.service';
import { ThesisService } from '../../service/thesis.service';

@Component({
  selector: 'app-latest-resources',
  templateUrl: './latest-resources.component.html',
  styleUrls: ['./latest-resources.component.sass']
})
export class LatestResourcesComponent implements OnInit {
  @Input() type: any;
  @Output() select_item_event: EventEmitter<any> = new EventEmitter();
  books: any = [];
  theses: any = [];
  query = {
    search: '',
    type: 'TITLE',
    total: 0,
    page: 1,
    limit: 20
  };

  constructor(
    private route: ActivatedRoute,
    public constant: LagashConstants,
    private global: Global,
    private router: Router,
    private book_service: BooksService,
    private thesis_service: ThesisService
  ) {
    this.search();
  }

  ngOnInit(): void {}

  search() {
    this.book_service.paginate(this.query)
    .subscribe((items) => {
      this.books = items;
    }, (error) => {
      console.log(<any>error);
    });
    this.thesis_service.paginate(this.query)
    .subscribe((items) => {
      this.theses = items;
    }, (error) => {
      console.log(<any>error);
    });
  }

  select_item(item, resource) {
    console.log({item, resource});
    this.select_item_event.emit({item, resource});
    //console.log('ho', item, resource);
    // switch (resource) {
    //   case 'BOOK':
    //     //this.router.navigate(['books', item._id]);
    //     this.router.navigate(['/books', item._id], { relativeTo: this.route });
    //     // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=> {
    //     //   this.router.navigate([['books', item._id]]);
    //     // });

    //     break;
    //   case 'THESIS':
    //     this.router.navigate(['thesis', item._id], { relativeTo: this.route });
    //     break;
    // }
  }
}
