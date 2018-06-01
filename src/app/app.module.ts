import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { BrowserRoutingModule } from './browser-2/routing.module';

import { HomeComponent } from './home/home.component';
import { BrowserComponent } from './browser/component';
import { Browser2Component } from './browser-2/component';

import { BookComponent } from './modules/books/book/component';
// import { BooksComponent } from './modules/books/component';
import { BooksComponent } from './modules/books/component';
import { BooksRoutingModule } from './modules/books/routing.module';
import { InformationComponent } from './modules/information/component';
import { InformationRoutingModule } from './modules/information/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { BootstrapAutocompleteModule } from 'angular-bootstrap-autocomplete';

import { DemoService } from './service/product.service';
import { BooksService } from './service/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserComponent,
    Browser2Component,
    CoursesListComponent,
    BookComponent,
    BooksComponent,
    InformationComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserRoutingModule,
    BooksRoutingModule,
    // BootstrapAutocompleteModule,
    InformationRoutingModule
  ],
  providers: [
    DemoService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
