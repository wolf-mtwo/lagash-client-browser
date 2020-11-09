import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SearchEmptyComponent } from './search-empty/search-empty.component';
import { SearchInputBasicComponent } from './search-input-basic/search-input-basic.component';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    SearchEmptyComponent,
    SearchInputBasicComponent,
    SearchToolbarComponent,
    CatalogListComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule
  ],
  exports: [
    SearchToolbarComponent,
    CatalogListComponent,
    SearchEmptyComponent,
    SearchInputBasicComponent,
    PaginationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule { }
