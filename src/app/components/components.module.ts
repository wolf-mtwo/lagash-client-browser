import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';

import { ResourceViewComponent } from './resource-view/resource-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

@NgModule({
  declarations: [
    ResourceViewComponent,
    BookViewComponent,
    CatalogListComponent
  ],
  exports: [
    ResourceViewComponent,
    BookViewComponent,
    CatalogListComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    MatListModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponentsModule { }
