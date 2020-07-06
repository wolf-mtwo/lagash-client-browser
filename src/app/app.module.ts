import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { BrowserRoutingModule } from './browser-2/routing.module';

import { HomeComponent } from './home/home.component';
import { BrowserComponent } from './browser/component';
import { Browser2Component } from './browser-2/component';

import { InformationComponent } from './modules/information/component';
import { LoginComponent } from './modules/information/login/component';
import { InformationRoutingModule } from './modules/information/routing.module';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BookComponent } from './modules/books/book/component';
import { BooksComponent } from './modules/books/component';
import { BooksRoutingModule } from './modules/books/routing.module';

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

// loans
import { LoansComponent } from './modules/loans/component';
import { LoansRoutingModule } from './modules/loans/routing.module';

import { DemoService } from './service/product.service';
import { BooksService } from './service/books.service';
import { ThesisService } from './service/thesis.service';
import { MagazinesService } from './service/magazines.service';
import { NewspapersService } from './service/newspapers.service';
import { IntegrationService } from './service/integration.service';
import { StoreService } from './service/store.service';
import { BackpackService } from './service/backpack.service';

import { Global } from './service/global.service';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LoginComponent,
    ThesisComponent,
    ThesisesComponent,
    MagazineComponent,
    MagazinesComponent,
    NewspaperComponent,
    NewspapersComponent,
    LoansComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,

    BrowserModule,
    AppRoutingModule,
    BrowserRoutingModule,
    BooksRoutingModule,
    // BootstrapAutocompleteModule,
    InformationRoutingModule,
    ThesisRoutingModule,
    MagazinesRoutingModule,
    NewspapersRoutingModule,
    LoansRoutingModule
  ],
  providers: [
    DemoService,
    BooksService,
    ThesisService,
    MagazinesService,
    NewspapersService,
    IntegrationService,
    StoreService,
    BackpackService,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
