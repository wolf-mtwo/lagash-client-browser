import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    ResourceViewComponent,
    BookViewComponent
  ],
  exports: [
    ResourceViewComponent,
    BookViewComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    SearchModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponentsModule { }
