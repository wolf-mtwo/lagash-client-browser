import { Book } from '../../models/book';
import { Component, OnInit, Input } from '@angular/core';
import { Global } from '../../service/global.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.sass']
})
export class BookViewComponent implements OnInit {

  @Input() item: Book;

  constructor(
    private global: Global,
  ) { }

  ngOnInit(): void {
  }

}
