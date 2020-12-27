import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ResourcesListViewComponent } from './resources-list-view/resources-list-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SearchModule } from './search/search.module';
import { ResourcesListItemViewComponent } from './resources-list-item-view/resources-list-item-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { ServicesModule } from '../service/services.module';
import { EjemplaresViewComponent } from './ejemplares-view/ejemplares-view.component';

@NgModule({
  declarations: [
    ResourcesListViewComponent,
    BookViewComponent,
    ResourcesListItemViewComponent,
    ResourceViewComponent,
    EjemplaresViewComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    FlexLayoutModule,
    SearchModule,
    ServicesModule
  ],
  exports: [
    ResourcesListViewComponent,
    BookViewComponent,
    ResourcesListItemViewComponent,
    ResourceViewComponent,
    EjemplaresViewComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponentsModule { }
