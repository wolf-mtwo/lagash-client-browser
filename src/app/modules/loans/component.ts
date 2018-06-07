import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge} from 'rxjs/operators';
import { BackpackService } from '../../service/backpack.service';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css', '../../linearicons.css']
})
export class LoansComponent {
  items: any = [];
  loans: any = [];
  I18N = null;
  constructor(
    private router: Router,
    private _service: BooksService,
    private store: BackpackService
  ) {
    this.loans = this.populate(store.load());
    this.I18N = store.I18N;
  }

  populate(loans) {
    return loans.map((loan) => {
      loan.code = [
        loan.item.material.code,
         loan.item.authors.length > 0 ? loan.item.authors[0].code: '',
        loan.item.ejemplar.suffix,
        'Ej.' + loan.item.ejemplar.order
      ].join(' ');
      return loan;
    });
  }

  public go_to_item(loan) {
    switch(loan.key) {
    case 'BOOK':
      this.router.navigate(['/books', loan.item.material._id]);
        break;
    case 'THESIS':
      this.router.navigate(['/thesis', loan.item.material._id]);
        break;
    case 'MAGAZINE':
      this.router.navigate(['/magazines', loan.item.material._id]);
        break;
    case 'NEWSPAPER':
      this.router.navigate(['/newspapers', loan.item.material._id]);
        break;
    default:
      throw new Error('not supported resource');
    }
  }
  public remove_loan(item, i) {
    this.loans.splice(i, 1);
    this.store.remove_position(i);
  }
}
