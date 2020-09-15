import { ToastrModule } from 'ngx-toastr';
import { NgSelect2Module } from 'ng-select2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

import { InformationComponent } from './pages/information/component';
import { LoginComponent } from './pages/information/login/component';
import { InformationRoutingModule } from './pages/information/routing.module';

import { BooksRoutingModule } from './pages/books/routing.module';

//search
import { SearchRoutingModule } from './pages/search/routing.module';

// tesis
import { ThesisComponent } from './pages/thesises/thesis/component';
import { ThesisesComponent } from './pages/thesises/component';
import { ThesisRoutingModule } from './pages/thesises/routing.module';

// magazine
import { MagazineComponent } from './pages/magazines/magazine/component';
import { MagazinesComponent } from './pages/magazines/component';
import { MagazinesRoutingModule } from './pages/magazines/routing.module';

// newspapers
import { NewspaperComponent } from './pages/newspapers/newspaper/component';
import { NewspapersComponent } from './pages/newspapers/component';
import { NewspapersRoutingModule } from './pages/newspapers/routing.module';

// loans
import { LoansComponent } from './pages/loans/component';
import { LoansRoutingModule } from './pages/loans/routing.module';

import { NgbdModalReaderCreate } from './pages/loans/modal';
import { AppComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { TemplatesModule } from './templates/templates.module';
import { ServicesModule } from './service/services.module';

@NgModule({
  declarations: [
    AppComponent,
    // SearchComponent,
    // SearchDetailComponent,
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
    FlexLayoutModule,
    LayoutModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    NgSelect2Module,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

    HomeModule,
    ServicesModule,
    BooksRoutingModule,
    InformationRoutingModule,
    ThesisRoutingModule,
    MagazinesRoutingModule,
    SearchRoutingModule,
    NewspapersRoutingModule,
    LoansRoutingModule,
    AppComponentsModule,
    CommonModule,
    TemplatesModule,
    PagesModule,
  ],
  providers: [
    // Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
