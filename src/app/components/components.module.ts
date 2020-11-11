import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SearchModule } from './search/search.module';
import { ResourceItemViewComponent } from './resource-item-view/resource-item-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ResourceViewComponent,
    BookViewComponent,
    ResourceItemViewComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    FlexLayoutModule,
    SearchModule
  ],
  exports: [
    ResourceViewComponent,
    BookViewComponent,
    ResourceItemViewComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponentsModule { }
