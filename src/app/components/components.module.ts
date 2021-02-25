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
import { ResourceInformationViewComponent } from './resource-information-view/resource-information-view.component';
import { LatestResourcesComponent } from './latest-resources/latest-resources.component';
import { HomeModule } from '../pages/home/home.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ResourcesListViewComponent,
    BookViewComponent,
    ResourcesListItemViewComponent,
    ResourceViewComponent,
    EjemplaresViewComponent,
    ResourceInformationViewComponent,
    LatestResourcesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    BrowserModule,
    FlexLayoutModule,
    SearchModule,
    HomeModule,
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
