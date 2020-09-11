import { Component, OnInit } from '@angular/core';
import { BackpackService } from 'src/app/service/backpack.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  loans = 0;

  constructor(
    private loan_store: BackpackService
  ) {
    this.loans = this.loan_store.load().length;
    this.loan_store.on((item) => {
      this.update_loans(item);
    });
  }

  ngOnInit(): void {
  }

  update_loans(item): void {
    this.loans = item;
  }
}
