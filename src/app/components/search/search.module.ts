import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SearchEmptyComponent } from './search-empty/search-empty.component';
import { SearchInputBasicComponent } from './search-input-basic/search-input-basic.component';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

@NgModule({
  declarations: [
    SearchEmptyComponent,
    SearchInputBasicComponent,
    SearchToolbarComponent,
    CatalogListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule
  ],
  exports: [
    SearchToolbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule { }
