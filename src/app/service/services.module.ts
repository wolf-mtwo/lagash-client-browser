import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Global } from './global.service';
import { BooksService } from './books.service';
import { SearchService } from './search.service';
import { ThesisService } from './thesis.service';
import { MagazinesService } from './magazines.service';
import { NewspapersService } from './newspapers.service';
import { ReaderService } from './readers.service';
import { IntegrationService } from './integration.service';
import { StoreService } from './store.service';
import { BackpackService } from './backpack.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    BooksService,
    SearchService,
    ThesisService,
    MagazinesService,
    NewspapersService,
    ReaderService,
    IntegrationService,
    StoreService,
    BackpackService,
    Global,
  ]
})
export class ServicesModule { }
