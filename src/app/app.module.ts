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

import { InformationComponent } from './modules/information/component';
import { InformationRoutingModule } from './modules/information/routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { BooksComponent } from './modules/books/component';
import { BookComponent } from './modules/books/book/component';
import { BooksComponent } from './modules/books/component';
import { BooksRoutingModule } from './modules/books/routing.module';
// import { BootstrapAutocompleteModule } from 'angular-bootstrap-autocomplete';

// tesis
import { ThesisComponent } from './modules/thesises/thesis/component';
import { ThesisesComponent } from './modules/thesises/component';
import { ThesisRoutingModule } from './modules/thesises/routing.module';

// magazine
import { MagazineComponent } from './modules/magazines/magazine/component';
import { MagazinesComponent } from './modules/magazines/component';
import { MagazinesRoutingModule } from './modules/magazines/routing.module';

// newspapers
import { NewspaperComponent } from './modules/newspapers/newspaper/component';
import { NewspapersComponent } from './modules/newspapers/component';
import { NewspapersRoutingModule } from './modules/newspapers/routing.module';

import { DemoService } from './service/product.service';
import { BooksService } from './service/books.service';
import { ThesisService } from './service/thesis.service';
import { MagazinesService } from './service/magazines.service';
import { NewspapersService } from './service/newspapers.service';

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
    ThesisComponent,
    ThesisesComponent,
    MagazineComponent,
    MagazinesComponent,
    NewspaperComponent,
    NewspapersComponent
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
    InformationRoutingModule,
    ThesisRoutingModule,
    MagazinesRoutingModule,
    NewspapersRoutingModule
  ],
  providers: [
    DemoService,
    BooksService,
    ThesisService,
    MagazinesService,
    NewspapersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
