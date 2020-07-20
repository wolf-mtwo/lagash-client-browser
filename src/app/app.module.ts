import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { InformationComponent } from './modules/information/component';
import { LoginComponent } from './modules/information/login/component';
import { InformationRoutingModule } from './modules/information/routing.module';

import { BookComponent } from './modules/books/book/component';
import { BooksComponent } from './modules/books/component';
import { BooksRoutingModule } from './modules/books/routing.module';

//search
import { SearchComponent } from './modules/search/component';
import { SearchDetailComponent } from './modules/search/detail/component';
import { SearchRoutingModule } from './modules/search/routing.module';


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

import { BooksService } from './service/books.service';
import { SearchService } from './service/search.service';
import { ThesisService } from './service/thesis.service';
import { MagazinesService } from './service/magazines.service';
import { NewspapersService } from './service/newspapers.service';
import { ReaderService } from './service/readers.service';
import { IntegrationService } from './service/integration.service';
import { StoreService } from './service/store.service';
import { BackpackService } from './service/backpack.service';

import { Global } from './service/global.service';

import { ToastrModule } from 'ngx-toastr';

import { NgbdModalReaderCreate } from './modules/loans/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    SearchComponent,
    SearchDetailComponent,
    InformationComponent,
    LoginComponent,
    ThesisComponent,
    ThesisesComponent,
    MagazineComponent,
    MagazinesComponent,
    NewspaperComponent,
    NewspapersComponent,
    LoansComponent,
    NgbdModalReaderCreate
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,

    BrowserModule,
    AppRoutingModule,
    BooksRoutingModule,
    // BootstrapAutocompleteModule,
    InformationRoutingModule,
    ThesisRoutingModule,
    MagazinesRoutingModule,
    SearchRoutingModule,
    NewspapersRoutingModule,
    LoansRoutingModule
  ],
  providers: [
    BooksService,
    SearchService,
    ThesisService,
    MagazinesService,
    NewspapersService,
    ReaderService,
    IntegrationService,
    StoreService,
    BackpackService,
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
