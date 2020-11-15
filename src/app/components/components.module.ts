import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { ResourcesViewComponent } from './resources-view/resources-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { SearchModule } from './search/search.module';
import { ResourceItemViewComponent } from './resource-item-view/resource-item-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { ServicesModule } from '../service/services.module';

@NgModule({
  declarations: [
    ResourcesViewComponent,
    BookViewComponent,
    ResourceItemViewComponent,
    ResourceViewComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    FlexLayoutModule,
    SearchModule,
    ServicesModule
  ],
  exports: [
    ResourcesViewComponent,
    BookViewComponent,
    ResourceItemViewComponent,
    ResourceViewComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponentsModule { }
